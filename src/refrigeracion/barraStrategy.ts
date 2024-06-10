import BarrasDeControl from "./barrasDeControl";
import RefrigerableStrategy from "./refrigerableStrategy";
import Reactor from "../reactor/reactor";
//falta crear los direcctorios
import EstadoReactor from "../src/estadosReactor/EstadoReactor";

export default class BarrasStrategy implements RefrigerableStrategy{
    private _barras : BarrasDeControl[];
    private _barrasUsadas : number;
 
    constructor(barras? : BarrasDeControl[]){
        this._barras = barras ?? [];
        this._barrasUsadas = 0;
    }

    public get barrasUsadas() : number {
        return this._barrasUsadas;
    }
    
    private restablecerBarrasUsadas() {
        this._barrasUsadas = 0;
    }
    
    public agregarBarra(barra : BarrasDeControl){
        this._barras.push(barra);
    }

    public quitarBarra(barra : BarrasDeControl){
        let ubicacion = this._barras.indexOf(barra);
        this._barras.splice(ubicacion, 1);
    }

    private esUtil(barra : BarrasDeControl) : boolean{

        return barra.tiempoVidaUtil > 0;
    }

    public disminuirEnergia(porcentajeReduccion : number, reactor : Reactor) {//baja la temperatura del nucleo
        let temperatura = reactor.nucleo.temperatura;

        temperatura -= ((temperatura * porcentajeReduccion) / 100);

        reactor.nucleo.temperatura = temperatura;
    }
    
    public limpiarBarraInutiles() {

        let barrasInutilizables = this._barras.filter(inutiles => this.esUtil(inutiles) === false);
        for (const iterator of barrasInutilizables) {
            this.quitarBarra(iterator);
        }
    }

    enfriar(reactor : Reactor) : void{

        //let estadoReactor = reactor.estado;
        this.restablecerBarrasUsadas();
        //limpio barras que no sirven
        this.limpiarBarraInutiles();
        
        this._barras.forEach(barra => {

            while ((!reactor.equals(EstadoReactorNormal)) && this.esUtil(barra)) {
                //insertar barra en nucleo
                reactor.nucleo.insertarBarraDeControl(barra);
                 //disminuir energia del nucleo
                this.disminuirEnergia(barra.porcentajeReduccion, reactor);
                
            }

            if(!this.esUtil(barra)){
                //si mi barra no es util la saco y uso otra
                this._barrasUsadas++;      
                reactor.nucleo.sacarBarraDeControl(); 
            }

            if(reactor.equals(EstadoReactorNormal)){
                //si mi reactor esta normal, salgo del bucle
                break;
            }
                   
        });


        if(!reactor.equals(EstadoReactorNormal)){
            throw new Error("El estado del reactor no fue normalizado, apagarlo inmediatamente");
            //enviar alarma para apagarlo
            //no tengo mas barras y no pude normalizar el reactor
        }
    }

    
}