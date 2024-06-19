import EstadoReactor from "./estadoReactor";

export default interface ISuscriptorEstadoDisminuido{
    recibirAlerta(estado : EstadoReactor);
}