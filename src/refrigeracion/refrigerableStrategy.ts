import Reactor from "../reactor/reactor";

export default interface RefrigerableStrategy{
    enfriar(reactor : Reactor) : void;
}