import Reactor from "../reactor/reactor";
import RefrigerableStrategy from "./refrigerableStrategy";
import Turbina from "./turbina";

export default class TurbinaStrategy implements RefrigerableStrategy{
    private _turbinas : Turbina[];
    
    constructor(turbinas? : Turbina[]){
        this._turbinas = turbinas ?? [];
    }

    public disminuirTemperatura(porcentajeReduccion : number, reactor : Reactor) {//baja la temperatura del nucleo
        let temperatura = reactor.nucleo.temperatura;

        temperatura -= ((temperatura * porcentajeReduccion) / 100);

        reactor.nucleo.temperatura = temperatura;
    }

    enfriar(reactor : Reactor) {
        this._turbinas.forEach(turbina => {
            if (turbina.activo) {
                this.disminuirTemperatura(turbina.porcentajeReduccion, reactor);
            }            
        });
    }
}