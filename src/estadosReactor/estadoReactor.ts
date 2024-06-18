import Reactor from "../reactor/reactor";

export default abstract class EstadoReactor{
    protected _reactor : Reactor = undefined as unknown as Reactor;

    public abstract generarEnergia(horasLimite : number) : void;

    public set setReactor(reactor : Reactor) {
        this._reactor = reactor;
    }
}