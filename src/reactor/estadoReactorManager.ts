import { EstadoReactor } from "../enums/estadoReactor";
import IEstadoReactor from "./IEstadoReactor";

export default class EstadoReactorManager implements IEstadoReactor {

    public actualizarEstado(temperatura : number) : EstadoReactor {

        if(temperatura < 280) {
            return EstadoReactor.ENCENDIDO;
        }
        else if(temperatura < 330) {
            return EstadoReactor.NORMAL;
        }
        else if(temperatura < 400) {
            return EstadoReactor.DISMINUIDO;
        }
        else{
            return EstadoReactor.CRITICO;
        }
    }
}