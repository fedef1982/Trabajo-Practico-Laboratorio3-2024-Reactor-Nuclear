import { estadosReactor } from "../constantes";
import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorApagado from "./estadoReactorApagado";

export default class EstadoReactorCritico extends EstadoReactor{
    private _suscriptor : ISuscriptorEstado;
    
    constructor(reactor : Reactor){
        super(reactor);
    }
    
    public set suscriptor(suscriptor : ISuscriptorEstado) {
        this._suscriptor = suscriptor;
    }
    
    public get suscriptor() : ISuscriptorEstado {
        return this._suscriptor;
    }
    

    public actualizarEstado(estado: EstadoReactor): void {
        this._reactor.estado = estado;
    }

    private notificarSrBurns() : void{
        this._suscriptor.recibirEstado(new EstadoReactorApagado(this._reactor))
    }

    public generarEnergia(): void {
        //pasar a estado apagado
        this._reactor.detener();
        //enviar alerta sr burns
        this.notificarSrBurns();
    }

}