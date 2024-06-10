import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorCritico from "./estadoReactorCritico";

export default class EstadoReactorDisminuido extends EstadoReactor{
    
    constructor(reactor : Reactor){
        super(reactor);
    }

   public actualizarEstado(estado: EstadoReactor): void {
       super.actualizarEstado(estado);
   }

   public generarEnergia(): void {
       // implementar con nick, no se que calculo
       //enviar alerta a operarios

       //el generador genera energia y guarda la enrgia generada
       this._reactor.generador.generarEnergia();

       if(this._reactor.sensor.getTemperaturaReactor() >= 400){

        //si la temperatura supera 400 paso a critico
           let critico = new EstadoReactorCritico(this._reactor);
           this.actualizarEstado(critico);
       }
   }

}