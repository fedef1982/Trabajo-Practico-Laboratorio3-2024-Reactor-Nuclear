import IMostrable from "./IMostrable";

export default class Alarma implements IMostrable{

    private _mensaje: string;

    constructor (mensaje:string){
        this._mensaje = mensaje;
    }

    public mostrar():string{
        const ahora = new Date;
        return this._mensaje + " fecha: " + ahora;

    }
    
    private enviar(casilla : string[]){
        casilla.push(this.mostrar());
    }
}