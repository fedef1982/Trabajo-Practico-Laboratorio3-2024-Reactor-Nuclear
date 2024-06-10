import { estadosReactor } from "../constantes";
import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";

export default class EstadoReactorCritico extends EstadoReactor{
    constructor(reactor : Reactor){
        super(reactor);
    }


    public actualizarEstado(estado: EstadoReactor): void {
        super.actualizarEstado(estado);
    }

    public generarEnergia(): void {
        //pasar a estado apagado
        this._reactor.detener();
        //enviar alerta sr burns
    }

}