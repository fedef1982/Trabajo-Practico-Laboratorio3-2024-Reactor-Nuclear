import EstadoReactor from "./estadoReactor";
import EstadoReactorNormal from "./estadoReactorNormal";

export default class EstadoReactorEncendido extends EstadoReactor{

    public generarEnergia(horasParaGenerarEnergia : number): void {
        
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaNucleo;
        let horasQueLlevaGenerando : number = 1;
        let cantidadCombustible : number = this._reactor.combustible.cantidadCombustible;
        
        while(this.puedeGenerarEnergia(horasQueLlevaGenerando, horasParaGenerarEnergia, cantidadCombustible,temperaturaReactorActual)){
            temperaturaReactorActual += temperaturaReactorActual * (this._reactor.combustible.porcentajeAumentoTemperatura / 100);
            this._reactor.nucleo.sensor.temperaturaNucleo = temperaturaReactorActual;

            cantidadCombustible--;
            this._reactor.combustible.cantidadCombustible = cantidadCombustible;

            horasQueLlevaGenerando++;
        }
        let horasRestantes : number = horasParaGenerarEnergia - horasQueLlevaGenerando;
        
        if(this._reactor.nucleo.sensor.getTemperaturaNucleo >= 280 && this._reactor.nucleo.sensor.getTemperaturaNucleo < 330){
            this._reactor.estado = new EstadoReactorNormal();
            this._reactor.estado.generarEnergia(horasRestantes);
        }
    }

    private puedeGenerarEnergia(horasGenerando : number, horasLimite : number, cantidadCombustible : number, temperaturaActual : number) : boolean {

        return horasGenerando <= horasLimite && cantidadCombustible > 0 && temperaturaActual < 280;
    }

}