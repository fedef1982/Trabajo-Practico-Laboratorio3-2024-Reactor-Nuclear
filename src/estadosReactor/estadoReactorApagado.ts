import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";

export default class EstadoReactorApagado extends EstadoReactor{

    constructor(reactor : Reactor){
        super(reactor);
    }
    
    public generarEnergia(horasLimite : number): void {
        throw new Error("no genera energia xq esta apagado");
    }
}