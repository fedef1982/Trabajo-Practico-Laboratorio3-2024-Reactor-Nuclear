import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorDisminuido from "./estadoReactorDisminuido";
import EstadoReactorNormal from "./estadoReactorNormal";

export default class EstadoReactorEncendido extends EstadoReactor{

    constructor(reactor : Reactor){
        super(reactor);
    }

    public actualizarEstado(estado: EstadoReactor): void {
        this._reactor.estado = estado;
    }

    public generarEnergia(): void {

        //creo variable para tener la temperatura del reactor,hay que pedirle la temperatura al nucleo??
        let temperaturaReactorActual : number = this._reactor.sensor.getTemperaturaReactor;

        //caliento el reactor hasta empezar a generar energia
        while(temperaturaReactorActual < 280){

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

        }

        //cuando se calento el reactor empiezo a generar energiar pasandolo a normal
        if(this._reactor.sensor.getTemperaturaReactor >= 280 && this._reactor.sensor.getTemperaturaReactor < 330){
            this.actualizarEstado(new EstadoReactorNormal(this._reactor));
        }
    }

}