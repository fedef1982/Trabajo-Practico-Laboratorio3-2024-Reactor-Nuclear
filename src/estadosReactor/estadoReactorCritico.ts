import Reactor from "../reactor/reactor";
import ISuscriptorEstado from "./ISuscriptorEstado";
import EstadoReactor from "./estadoReactor";

export default class EstadoReactorCritico extends EstadoReactor{
    private _suscriptor : ISuscriptorEstado = undefined as unknown as ISuscriptorEstado;

    constructor(reactor : Reactor){
        super(reactor);
    }
    
    public set suscriptor(suscriptor : ISuscriptorEstado) {
        this._suscriptor = suscriptor;
    }
    
    public get suscriptor() : ISuscriptorEstado {
        return this._suscriptor;
    }

    private notificarSrBurns() : void{
        this._suscriptor.recibirAlerta(this);
    }

    public generarEnergia(horasLimite: number): void {
        throw new Error("No se puede generar mas energia dentro de este estado");
    }

    public situacionCritica(): void {
        //enviar alerta sr burns
        this.notificarSrBurns();
        this._reactor.detener();
    }
}