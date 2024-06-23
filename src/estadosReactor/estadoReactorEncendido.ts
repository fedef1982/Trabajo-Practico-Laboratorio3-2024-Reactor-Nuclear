import EstadoReactor from "./estadoReactor";
import EstadoReactorNormal from "./estadoReactorNormal";

export default class EstadoReactorEncendido extends EstadoReactor{

    public generarEnergia(horasParaGenerarEnergia : number): void {
        
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaNucleo;
        let horasQueLlevaGenerando : number = 1;
        
        while(temperaturaReactorActual < 280 && horasQueLlevaGenerando <= horasParaGenerarEnergia){
            temperaturaReactorActual += temperaturaReactorActual * (this._reactor.combustible.porcentajeAumentoTemperatura / 100);
            this._reactor.nucleo.sensor.temperaturaNucleo = temperaturaReactorActual;

            let combustibleActual = this._reactor.combustible.cantidadCombustible;
    
            this._reactor.combustible.cantidadCombustible = combustibleActual - 1;

            horasQueLlevaGenerando++;
        }
        let horasRestantes : number = horasParaGenerarEnergia - horasQueLlevaGenerando;
        
        if(this._reactor.nucleo.sensor.getTemperaturaNucleo >= 280 && this._reactor.nucleo.sensor.getTemperaturaNucleo < 330){
            this._reactor.estado = new EstadoReactorNormal();
            this._reactor.estado.generarEnergia(horasRestantes);
        }
    }

}