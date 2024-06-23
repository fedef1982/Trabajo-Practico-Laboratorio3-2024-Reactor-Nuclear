import Reactor from "../reactor/reactor";

export default interface RefrigerableStrategy{
    disminuirTemperatura(porcentajeReduccion : number, reactor : Reactor) : void;
    enfriar(reactor : Reactor) : void;
}