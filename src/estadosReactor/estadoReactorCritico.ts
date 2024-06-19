import ISuscriptorEstadoApagado from "./ISuscriptorEstadoApagado";
import EstadoReactor from "./estadoReactor";
import EstadoReactorApagado from "./estadoReactorApagado";

export default class EstadoReactorCritico extends EstadoReactor{
    private _suscriptor : ISuscriptorEstadoApagado = undefined as unknown as ISuscriptorEstadoApagado;

    constructor() {
        super();
    }

    public set suscriptor(suscriptor : ISuscriptorEstadoApagado) {
        this._suscriptor = suscriptor;
    }
    
    public get suscriptor() : ISuscriptorEstadoApagado {
        return this._suscriptor;
    }

    private notificarSrBurns() : void{
        this._suscriptor.recibirAlerta(new EstadoReactorApagado());
    }

    public generarEnergia(horasLimite: number): void {
        throw new Error("No se puede generar mas energia dentro de este estado");
    }

    public situacionCritica(): void {
        //enviar alerta sr burns
        this._reactor.detener();
        this.notificarSrBurns();
    }
}