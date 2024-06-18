import EstadoReactor from "./estadoReactor";
import EstadoReactorDisminuido from "./estadoReactorDisminuido";

export default class EstadoReactorNormal extends EstadoReactor{

    public equals(estado : EstadoReactor) : boolean {
        return estado instanceof EstadoReactorNormal;
    }

    public generarEnergia(horasParaGenerarEnergia : number): void {
        let temperaturaReactorActual : number = this._reactor.nucleo.sensor.getTemperaturaReactor;
        let horasQueLlevaGenerando : number = 1;

        while(temperaturaReactorActual < 330 && horasQueLlevaGenerando <= horasParaGenerarEnergia){
            this._reactor.generador.generarEnergia(100, temperaturaReactorActual);
            temperaturaReactorActual += 8;
            
            this._reactor.nucleo.temperatura = temperaturaReactorActual;
            horasQueLlevaGenerando++;
        }

        let horasRestantes : number = horasParaGenerarEnergia - horasQueLlevaGenerando;
        
        if(this._reactor.nucleo.sensor.getTemperaturaReactor > 330){
            this._reactor.estado = new EstadoReactorDisminuido();
            this._reactor.estado.generarEnergia(horasRestantes);
        }
    }

}