import Reactor from "../reactor/reactor";

export default abstract class EstadoReactor{
    protected _reactor : Reactor;

    public abstract generarEnergia();
    public abstract actualizarEstado();
}