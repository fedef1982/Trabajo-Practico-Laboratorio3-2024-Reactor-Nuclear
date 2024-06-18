import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";
import Alerta from "../tablero/alerta";
import CentralNuclear from "../central/centralNuclear";
import ISuscriptorEstado from "../reactor/ISuscriptorEstado";
import EstadoReactor from "../estadosReactor/estadoReactor";

export default class Operador implements ISuscriptorEstado{
    private _legajo : number;
    private _alerta : Alerta[];
    private _strategy : RefrigerableStrategy;

    constructor();
    constructor(legajo : number);
    constructor(legajo? : number){
        this._legajo = legajo ?? -1;
        if(legajo != undefined){
            this._legajo = legajo;
        }
    }

    //geters y setters
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
    public activarProtocoloDeEnfriamiento(central : CentralNuclear){
        if (this._alerta.length > 0) {
            this._alerta.length = 0;
            central.strategy = this._strategy;
            central.activarMecanismoEnfriamiento();
        }
    }

    recibirAlerta(estado : EstadoReactor){
        let alerta = new Alerta();
        alerta.estado = estado;
        this._alerta.push(alerta);
    }
    
}