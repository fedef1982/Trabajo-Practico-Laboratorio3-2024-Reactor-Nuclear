import Reactor from "../reactor/reactor";
import ISuscriptorEstado from "./ISuscriptorEstado";
import EstadoReactor from "./estadoReactor";
import EstadoReactorCritico from "./estadoReactorCritico";

export default class EstadoReactorDisminuido extends EstadoReactor{
    private _suscriptores : ISuscriptorEstado[];

    constructor(){
        super();
        this._suscriptores = undefined as unknown as ISuscriptorEstado[];
    }

    public generarEnergia(horasParaGenerarEnergia : number): void {
        this.notificarEstado();
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaReactor;
        let horasQueLlevaGenerando : number = 1;
        
        while (temperaturaReactorActual < 400 && horasQueLlevaGenerando <= horasParaGenerarEnergia) {
            this._reactor.generador.generarEnergia(80, temperaturaReactorActual);
            temperaturaReactorActual += 8;

            this._reactor.nucleo.temperatura = temperaturaReactorActual;
            horasQueLlevaGenerando++;
            //genera energia y notifica al operador
        }

        if(this._reactor.nucleo.sensor.getTemperaturaReactor >= 400){
            let estadoCritico : EstadoReactorCritico = new EstadoReactorCritico();

            this._reactor.estado = estadoCritico;
            estadoCritico.situacionCritica();
        }
    }

    public suscribir(suscriptor : ISuscriptorEstado) {
        this._suscriptores.push(suscriptor);
    }

    public desuscribir(suscriptor : ISuscriptorEstado) {
        this._suscriptores = this._suscriptores.filter(sus => sus !== suscriptor);
    }
    
    public notificarEstado(){
        this._suscriptores.forEach(suscriptor => {
            suscriptor.recibirAlerta(this);
        });
    }
}