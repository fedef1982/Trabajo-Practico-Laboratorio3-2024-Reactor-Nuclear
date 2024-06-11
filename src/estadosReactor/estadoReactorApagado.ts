import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";

export default class EstadoReactorApagado extends EstadoReactor{
    
    constructor(reactor : Reactor){
        super(reactor);
    }

    public actualizarEstado(estado: EstadoReactor): void {
        throw new Error("No se puede actualizar");
    }
    
    public generarEnergia(): void {
        throw new Error("no genera energia xq esta apagado");
    }

    public detenerReactor() : void {
        this._reactor.detener();
    }
}