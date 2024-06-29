import ISuscriptorEstadoDisminuido from "./ISuscriptorEstadoDisminuido";
import EstadoReactor from "./estadoReactor";
import EstadoReactorCritico from "./estadoReactorCritico";

export default class EstadoReactorDisminuido extends EstadoReactor{
    private _suscriptores : ISuscriptorEstadoDisminuido[];

    constructor(){
        super();
        this._suscriptores = [];
    }

    public generarEnergia(horasParaGenerarEnergia : number): void {
        this.notificarEstado();
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaNucleo;
        let horasQueLlevaGenerando : number = 1;
        let cantidadCombustible : number = this._reactor.combustible.cantidadCombustible;

        while(this.puedeGenerarEnergia(horasQueLlevaGenerando, horasParaGenerarEnergia, cantidadCombustible, temperaturaReactorActual)) {
            this._reactor.generador.generarEnergia(80, temperaturaReactorActual);
            temperaturaReactorActual += 8;

            this._reactor.nucleo.temperatura = temperaturaReactorActual;
            horasQueLlevaGenerando++;
            
            cantidadCombustible--;
            this._reactor.combustible.cantidadCombustible = cantidadCombustible;

        }

        if(this._reactor.nucleo.temperatura >= 400){
            let estadoCritico : EstadoReactorCritico = new EstadoReactorCritico();
            estadoCritico.setReactor = this._reactor;
            
            this._reactor.estado = estadoCritico;
            estadoCritico.situacionCritica();
        }

    }

    public suscribir(suscriptor : ISuscriptorEstadoDisminuido) {
        this._suscriptores.push(suscriptor);
    }

    public desuscribir(suscriptor : ISuscriptorEstadoDisminuido) {
        this._suscriptores = this._suscriptores.filter(sus => sus !== suscriptor);
    }
    
    public notificarEstado(){
        this._suscriptores.forEach(suscriptor => {
            suscriptor.recibirAlerta(this);
        });
    }

    private puedeGenerarEnergia(horasGenerando : number, horasLimite : number, cantidadCombustible : number, temperaturaActual : number) : boolean {

        return horasGenerando <= horasLimite && cantidadCombustible> 0 && temperaturaActual < 400
    }
}