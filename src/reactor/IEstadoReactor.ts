import { EstadoReactor } from "../enums/estadoReactor";

export default interface IEstadoReactor{
    
    get estado() : EstadoReactor;
    actualizarEstado(temperatura : number) : void;
}