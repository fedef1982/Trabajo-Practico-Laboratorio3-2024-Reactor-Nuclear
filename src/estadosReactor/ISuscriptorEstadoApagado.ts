import EstadoReactor from "./estadoReactor";

export default interface ISuscriptorEstadoApagado{
    recibirAlerta(estado : EstadoReactor);
}