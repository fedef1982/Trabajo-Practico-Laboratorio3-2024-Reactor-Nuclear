import Refrigerable from "./refrigerable";

export default class Turbina implements Refrigerable{
    private _porcentajeReduccion : number;
    private _activo : boolean;
    
    constructor(potencia : number){
        this._porcentajeReduccion = -1;
        this._activo = false;
        if (potencia != undefined) {
            this._porcentajeReduccion = potencia;
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
    
    esUtil(): boolean {
        return this._activo;
    }

    disminuirTemperatura() {
        return this._porcentajeReduccion;
    }
}