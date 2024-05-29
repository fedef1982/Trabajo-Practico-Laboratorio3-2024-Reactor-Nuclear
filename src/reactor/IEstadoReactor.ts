import { EstadoReactor } from "../enums/estadoReactor";

export default interface IEstadoReactor{
    actualizarEstado(temperatura : number) : EstadoReactor;
}