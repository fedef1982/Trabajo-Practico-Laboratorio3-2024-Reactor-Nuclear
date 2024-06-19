import EstadoReactor from "../estadosReactor/estadoReactor";

export default class Alerta{
    private _estado : EstadoReactor = undefined as unknown as EstadoReactor;
    
    public set estado(estado : EstadoReactor) {
        this._estado = estado;
    }
    
    public get estado() : EstadoReactor {
        return this._estado;
    }
    
}