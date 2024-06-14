import BarrasDeControl from "./barrasDeControl";
import RefrigerableStrategy from "./refrigerableStrategy";
import Reactor from "../reactor/reactor";
import EstadoReactorNormal from "../estadosReactor/estadoReactorNormal";
import EstadoReactorCritico from "../estadosReactor/estadoReactorCritico";

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

    public get barras() : BarrasDeControl[]{
        return this._barras;
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

    public disminuirTemperatura(porcentajeReduccion : number, reactor : Reactor) {
        let temperatura = reactor.nucleo.temperatura;

        temperatura -= ((temperatura * porcentajeReduccion) / 100);

        reactor.nucleo.temperatura = temperatura;
        if (reactor.nucleo.temperatura < 330) {
            reactor.estado = new EstadoReactorNormal(reactor);
        }
    }
    
    public limpiarBarraInutiles() {
        this._barras = this._barras.filter(util => this.esUtil(util));
    }

    enfriar(reactor : Reactor) : void{

        let estadoNormal = new EstadoReactorNormal(reactor);
        this.restablecerBarrasUsadas();
        //limpio barras que no sirven
        this.limpiarBarraInutiles();
        
        for (let i = 0; i < this._barras.length; i++) {
            let barra = this._barras[i];
            //insertar barra en nucleo
            reactor.nucleo.insertarBarraDeControl(barra);
    
            while (!estadoNormal.equals(reactor.estado) && this.esUtil(barra)) {
                //disminuir energia del nucleo
                this.disminuirTemperatura(barra.porcentajeReduccion, reactor);
            }

            if (!this.esUtil(barra)) {
                //si mi barra no es util la saco y uso otra
                this._barrasUsadas++;      
                reactor.nucleo.sacarBarraDeControl(); 
            }
    
            if (estadoNormal.equals(reactor.estado)) {
                //si mi reactor esta normal, salgo del bucle
                break;
            }
        }
    
        if (!estadoNormal.equals(reactor.estado)) {
            const critico : EstadoReactorCritico = new EstadoReactorCritico(reactor);
            critico.situacionCritica();
            //enviar alarma para apagarlo
            //no tengo mas barras y no pude normalizar el reactor
        }
    }
}