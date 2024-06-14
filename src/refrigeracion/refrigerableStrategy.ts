import Reactor from "../reactor/reactor";

export default interface RefrigerableStrategy{
    disminuirTemperatura(porcentajeReduccion : number, reactor : Reactor)
    enfriar(reactor : Reactor) : void;
}