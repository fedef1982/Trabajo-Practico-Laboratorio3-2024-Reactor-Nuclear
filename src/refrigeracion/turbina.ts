export default class Turbina{
    private _porcentajeReduccion : number;
    private _activo : boolean;
    
    constructor(porcentaje : number){
        this._porcentajeReduccion = -1;
        this._activo = false;
        if (porcentaje != undefined) {
            this._porcentajeReduccion = porcentaje;
        }
    }

    public get activo() : boolean {
        return this._activo;
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
    
}