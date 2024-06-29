import EstadoReactor from "../estadosReactor/estadoReactor";
import EstadoReactorDisminuido from "../estadosReactor/estadoReactorDisminuido";

export default class Alerta {
    private _estado : EstadoReactor;

    constructor (){
        this._estado = undefined as unknown as EstadoReactor;
    }

    public set estado(estado : EstadoReactor) {
        this._estado = estado;
    }

    public get estado() : EstadoReactor {
        return this._estado;
    }
}