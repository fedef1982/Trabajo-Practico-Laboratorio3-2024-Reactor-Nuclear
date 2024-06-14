import Reactor from "../reactor/reactor";
import EstadoReactor from "./estadoReactor";
import EstadoReactorNormal from "./estadoReactorNormal";

export default class EstadoReactorEncendido extends EstadoReactor{

    constructor(reactor : Reactor){
        super(reactor);
    }
    
    private calentar() : void{
        if (this._reactor.combustible.getCantidadCombustible > 0) {
            const combustibleActual : number = this._reactor.combustible.getCantidadCombustible;
            this._reactor.combustible.cantidadCombustible = (combustibleActual - 1);
        }        
    }

    public generarEnergia(horasParaGenerarEnergia : number): void {

        //creo variable para tener la temperatura del reactor,hay que pedirle la temperatura al nucleo??
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaReactor;
        let horasQueLlevaGenerando : number = 1;
        //caliento el reactor hasta empezar a generar energia
        while(temperaturaReactorActual < 280 && horasQueLlevaGenerando <= horasParaGenerarEnergia){
            //Consume combustible al calentar el nucleo
            this.calentar();

            temperaturaReactorActual += temperaturaReactorActual + 1;
            this._reactor.nucleo.temperatura = temperaturaReactorActual;
            horasQueLlevaGenerando++;
        }
        
        let horasRestantes : number = horasParaGenerarEnergia - horasQueLlevaGenerando;
        //cuando se calento el reactor empiezo a generar energiar pasandolo a normal
        if(this._reactor.nucleo.sensor.getTemperaturaReactor >= 280 && this._reactor.nucleo.sensor.getTemperaturaReactor < 330){
            this.actualizarEstado(new EstadoReactorNormal(this._reactor));
            this._reactor.estado.generarEnergia(horasRestantes);
        }
    }

}