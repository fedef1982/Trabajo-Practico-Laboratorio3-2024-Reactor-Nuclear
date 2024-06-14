import Reactor from "../reactor/reactor";

export default abstract class EstadoReactor{
    protected _reactor : Reactor;

    constructor(reactor: Reactor) {
        this._reactor = reactor;
    }

    public abstract generarEnergia(horasLimite : number) : void;
    public actualizarEstado(estado : EstadoReactor) : void{
        this._reactor.estado = estado;
    }
}