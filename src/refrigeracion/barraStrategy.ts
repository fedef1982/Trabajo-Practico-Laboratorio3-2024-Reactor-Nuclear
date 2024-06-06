import BarrasDeControl from "./barrasDeControl";
import RefrigerableStrategy from "./refrigerableStrategy";
import Reactor from "../reactor/reactor";

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
        if (barra.tiempoVidaUtil === 0){
            return false;
        } 
        return true;
    }

    enfriar(reactor : Reactor) : void{
        let estadoReactor = reactor.estadoReactor;
        this.restablecerBarrasUsadas();
        this._barras.forEach(barra => {
            while (estadoReactor != EstadoReactor.NORMAL && this.esUtil(barra)) {
                reactor.disminuirEnergia(barra.porcentajeReduccion);
                estadoReactor = reactor.estadoReactor;
            }                
        });
        if(estadoReactor != EstadoReactor.NORMAL){
            throw new Error("El estado del reactor no fue normalizado, apagarlo inmediatamente");
            //enviar alarma para apagarlo
        }
    }
}