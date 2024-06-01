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

    public get leido() : boolean {
        return this._leido;
    }

    public set leido(leido : boolean) {
        this._leido = leido;
    }

    public set mensaje(mensaje : string) {
        this._mensaje = mensaje;
    }
    

}