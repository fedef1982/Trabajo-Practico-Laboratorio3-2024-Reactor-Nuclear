import EstadoReactor from "../estadoReactor/estadoReactor";

export default class Alerta{
    private _estado : EstadoReactor;
    
    public set estado(estado : EstadoReactor) {
        this._estado = estado;
    }
    
    public get estado() : EstadoReactor {
        return this._estado;
    }
    
}