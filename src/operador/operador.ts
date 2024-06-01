export default class Operador{
    private _legajo : number;
    //casilla para recibir alertas
    private _casilla : Mensaje[];

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

    //tiene que enviar un mensaje a la central para que se active el mecanismo
    //no se debe pasar la central como parametro
    public activarProtocoloDeEnfriamiento(central : CentralNuclear){
        central.activarMecanismoEnfriamiento();
    }

    public agregarMensajeALaCasilla(mensaje : Mensaje){
        this._casilla.push(mensaje);
    }
    
}