import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";
import Alerta from "../tablero/alerta";
import CentralNuclear from "../central/centralNuclear";
import ISuscriptorEstadoDisminuido from "../estadosReactor/ISuscriptorEstadoDisminuido";
import EstadoReactor from "../estadosReactor/estadoReactor";

export default class Operador implements ISuscriptorEstadoDisminuido{
    private _legajo : number;
    private _alerta : Alerta[] = [];
    private _strategy : RefrigerableStrategy = undefined as unknown as RefrigerableStrategy;
    private _central : CentralNuclear = undefined as unknown as CentralNuclear;

    constructor();
    constructor(legajo : number);
    constructor(legajo? : number){
        this._legajo = legajo ?? -1;
    }

    //geters y setters

    public set central(centralNuclear : CentralNuclear){
        this._central = centralNuclear;
    }

    public get central() : CentralNuclear{
        return this._central ;
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
        this._central.strategy = this._strategy;
        this._central.activarMecanismoDeEnfriamiento();
        
    }

    recibirAlerta(estado : EstadoReactor){
        let alerta = new Alerta();
        alerta.estado = estado;
        this._alerta.push(alerta);
        this.activarProtocoloDeEnfriamiento();
    }
    
}