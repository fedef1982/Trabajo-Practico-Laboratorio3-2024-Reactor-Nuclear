import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";
import Alerta from "../tablero/alerta";
import CentralNuclear from "../central/centralNuclear";
import ISuscriptorEstadoDisminuido from "../estadosReactor/ISuscriptorEstadoDisminuido";
import EstadoReactor from "../estadosReactor/estadoReactor";

export default class Operador implements ISuscriptorEstadoDisminuido{
    private _legajo : number;
    private _alerta : Alerta[] = [];
    private _strategy : RefrigerableStrategy = undefined as unknown as RefrigerableStrategy;

    constructor();
    constructor(legajo : number);
    constructor(legajo? : number){
        this._legajo = legajo ?? -1;
    }

    public get legajo() : number {
        return this._legajo;
    }

    public set legajo(legajo : number){
        this._legajo = legajo;
    }
    
    public get alerta() : Alerta[] {
        return this._alerta;
    }
    
    public get strategy() : RefrigerableStrategy {
        return this._strategy;
    }
    
    public set strategy(strategy : RefrigerableStrategy) {
        this._strategy = strategy;
    }
    //Mejorar este metodo y posiblemente agregar otro mas para que agrupe tanto recibir alerta y este.
    public activarProtocoloDeEnfriamiento(){
        CentralNuclear.getInstance().strategy = this._strategy;
        CentralNuclear.getInstance().activarMecanismoDeEnfriamiento();
    }

    recibirAlerta(estado : EstadoReactor){
        let alerta = new Alerta();
        alerta.estado = estado;
        this._alerta.push(alerta);
        this.activarProtocoloDeEnfriamiento();
    }
    
}