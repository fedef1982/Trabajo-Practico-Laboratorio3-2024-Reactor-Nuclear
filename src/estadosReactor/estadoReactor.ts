import Reactor from "../reactor/reactor";

export default abstract class EstadoReactor{
    protected _reactor : Reactor;

    constructor(reactor: Reactor) {
        this._reactor = reactor;
    }

    public abstract generarEnergia() : void;
    public abstract actualizarEstado(estado : EstadoReactor) : void;
}