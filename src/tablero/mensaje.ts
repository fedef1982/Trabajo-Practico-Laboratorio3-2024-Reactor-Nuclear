export default class Mensaje{
    private _leido : boolean;
    private _mensaje : string;

    constructor(mensaje : string){
        this._mensaje = mensaje ?? "";
        this._leido = false;
    }

    
    public get mensaje() : string {
        return this._mensaje;
    }
    

}