import SrBurns from "../operador/srBurns";
import ISuscriptorEstadoApagado from "./ISuscriptorEstadoApagado";
import EstadoReactor from "./estadoReactor";
import EstadoReactorApagado from "./estadoReactorApagado";

export default class EstadoReactorCritico extends EstadoReactor{
    private _suscriptores: ISuscriptorEstadoApagado[] = [];

    constructor() {
        super();
        this._suscriptores.push(SrBurns.getInstance());
    }

    public suscribir(suscriptor : ISuscriptorEstadoApagado) {
        this._suscriptores.push(suscriptor);
    }
    
    public desuscribir(suscriptor : ISuscriptorEstadoApagado) {
            this._suscriptores = this._suscriptores.filter(sus => sus !== suscriptor);
        }

    public notificarSrBurns(){
        this._suscriptores.forEach(suscriptor => {
            suscriptor.recibirAlerta(new EstadoReactorApagado());
        });
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