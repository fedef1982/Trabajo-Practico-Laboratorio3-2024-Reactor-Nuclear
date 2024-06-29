import EstadoReactor from "./estadoReactor";
import EstadoReactorDisminuido from "./estadoReactorDisminuido";

export default class EstadoReactorNormal extends EstadoReactor{

    public equals(estado : EstadoReactor) : boolean {
        return estado instanceof EstadoReactorNormal;
    }

    public generarEnergia(horasParaGenerarEnergia : number): void {
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaNucleo;
        let horasQueLlevaGenerando : number = 1;
        let cantidadCombustible : number = this._reactor.combustible.cantidadCombustible;

        while(this.puedeGenerarEnergia(horasQueLlevaGenerando, horasParaGenerarEnergia, cantidadCombustible, temperaturaReactorActual)){
            this._reactor.generador.generarEnergia(100, temperaturaReactorActual);
            temperaturaReactorActual * (this._reactor.combustible.porcentajeAumentoTemperatura / 100);
            
            this._reactor.nucleo.temperatura = temperaturaReactorActual;
            horasQueLlevaGenerando++;

            cantidadCombustible--;
            this._reactor.combustible.cantidadCombustible = cantidadCombustible;
        }

        let horasRestantes : number = horasParaGenerarEnergia - horasQueLlevaGenerando;
        
        if(this._reactor.nucleo.sensor.getTemperaturaNucleo > 330){
            this._reactor.estado = new EstadoReactorDisminuido();
            this._reactor.estado.generarEnergia(horasRestantes);
        }
    }

    private puedeGenerarEnergia(horasGenerando : number, horasLimite : number, cantidadCombustible : number, temperaturaActual : number) : boolean {

        return horasGenerando <= horasLimite && cantidadCombustible> 0 && temperaturaActual < 330
    }

}