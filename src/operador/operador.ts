export default class Operador{
    private _legajo : number;

    constructor();
    constructor(legajo : number);
    constructor(legajo? : number){
        this._legajo = legajo ?? -1;
    }

    //geters y setters
    public get legajo() : number {
        return this._legajo;
    }

    public set legajo(legajo : number){
        this._legajo = legajo;
    }

    public activarProtocoloDeEnfriamiento(central : CentralNuclear){
        central.activaMecanismoEnfriamiento();
    }
    
}