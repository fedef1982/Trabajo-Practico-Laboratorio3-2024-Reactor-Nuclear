import { EstadoReactor } from "../enums/estadoReactor";
import IEstadoReactor from "./IEstadoReactor";

export default class EstadoReactorManager implements IEstadoReactor {
    private _estado : EstadoReactor;

    constructor(){
        this._estado = EstadoReactor.APAGADO;
    }

    public get estado() : EstadoReactor {
        return this._estado;
    }

    public actualizarEstado(temperatura : number) : void {

        if(temperatura < 280) {
            this._estado = EstadoReactor.ENCENDIDO;
        }
        else if(temperatura < 330) {
            this._estado = EstadoReactor.NORMAL;
        }
        else if(temperatura < 400) {
            this._estado = EstadoReactor.DISMINUIDO;
        }
        else{
            this._estado = EstadoReactor.CRITICO;
        }
    }
}