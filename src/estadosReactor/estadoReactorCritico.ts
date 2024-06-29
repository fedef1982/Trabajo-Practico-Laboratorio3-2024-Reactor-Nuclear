import NoSeGeneraEnergiaException from "../excepciones/noSeGeneraEnergiaException";
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
        throw new NoSeGeneraEnergiaException("En ente estado no se puede generar energía. -> Estado CRITICO");
    }

    public situacionCritica(): void {
        //enviar alerta sr burns
        this._reactor.detener();
        this.notificarSrBurns();
    }
}