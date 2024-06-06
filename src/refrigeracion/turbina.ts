import Reactor from "../reactor/reactor";
import RefrigerableStrategy from "./refrigerableStrategy";

export default class Turbina implements RefrigerableStrategy{
    private _porcentajeReduccion : number;
    private _activo : boolean;
    
    constructor(porcentaje : number){
        this._porcentajeReduccion = -1;
        this._activo = false;
        if (porcentaje != undefined) {
            this._porcentajeReduccion = porcentaje;
        }
    }

    public activar(){
        this._activo = true;
    }

    public desactivar(){
        this._activo = false;
    }

    public get porcentajeReduccion() : number {
        return this._porcentajeReduccion;
    }
    

    enfriar(reactor : Reactor) {
        //implementar
    }
}