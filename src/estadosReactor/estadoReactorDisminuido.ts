import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorCritico from "./estadoReactorCritico";

export default class EstadoReactorDisminuido extends EstadoReactor{
    private _suscriptores: ISuscritorEstado;
    
    constructor(reactor : Reactor){
        super(reactor);
    }

    public actualizarEstado(estado: EstadoReactor): void {
        this._reactor.estado = estado;
    }

    public generarEnergia(): void {
       // implementar con nick, no se que calculo
       //enviar alerta a operarios
        this.notificarEstado(new EstadoReactorDisminuido(this._reactor));
       //el generador genera energia y guarda la enrgia generada
       this._reactor.generador.generarEnergia();

       if(this._reactor.sensor.getTemperaturaReactor() >= 400){

        //si la temperatura supera 400 paso a critico
           this.actualizarEstado(new EstadoReactorCritico(this._reactor));
       }
    }

    public suscribir(suscriptor : ISuscriptorEstado) {
        this._suscriptores.push(suscriptor);
    }

    public desuscribir(suscriptor : ISuscriptorEstado) {
        this._suscriptores = this._suscriptores.filter(sus => sus !== suscriptor);
    }
    
    public notificarEstado(estado : EstadoReactor){
        this._suscriptores.forEach(suscriptor => {
            suscriptor.recibirEstado(estado);
        });
    }
}