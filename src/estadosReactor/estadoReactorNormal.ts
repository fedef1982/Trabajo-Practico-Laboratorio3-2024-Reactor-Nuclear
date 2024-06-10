import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorDisminuido from "./estadoReactorDisminuido";

export default class EstadoReactorNormal extends EstadoReactor{

    constructor(reactor : Reactor){
        super(reactor);
    }

   public actualizarEstado(estado: EstadoReactor): void {
       super.actualizarEstado(estado);
   }

    public generarEnergia(): void {

        //creo variable para tener la temperatura del reactor,hay que pedirle la temperatura al nucleo??
        let temperaturaReactorActual : number = this._reactor.sensor.getTemperaturaReactor;

        while(temperaturaReactorActual < 330){

            //calcula la temperatura a aumentar
            temperaturaReactorActual += temperaturaReactorActual * (this._reactor.combustible.porcentajeAumentoTemperatura / 100);
            //seteo la temperatura al reactor, aca deberia ser al nucleo??
            this._reactor.sensor.temperaturaReactor = temperaturaReactorActual;

            //guardo en una variable la cant de combustible
            let combustibleActual = this._reactor.combustible.getCantidadCombustible;
    
            //actualizo al reactor su combustible restandole 1
            this._reactor.combustible.cantidadCombustible = combustibleActual - 1;

            //actualizo la variable de temperatura del reactor, la cual uso para mi bucle while
            temperaturaReactorActual = this._reactor.sensor.getTemperaturaReactor;

            //el generador genera energia y guarda la enrgia generada
            this._reactor.generador.generarEnergia();

        }

        if(this._reactor.sensor.getTemperaturaReactor > 330){
            let disminuido = new EstadoReactorDisminuido(this._reactor);
            this.actualizarEstado(disminuido);
        }
    }

}