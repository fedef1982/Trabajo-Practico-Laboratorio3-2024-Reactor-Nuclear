export default class Mensaje{
    private _leido : boolean;
    private _cuerpo : string;

    constructor(cuerpo : string){
        this._cuerpo = cuerpo ?? "";
        this._leido = false;
    }

    
    public get cuerpo() : string {
        return this._cuerpo;
    }

    public get leido() : boolean {
        return this._leido;
    }

    public set leido(leido : boolean) {
        this._leido = leido;
    }

    public set cuerpo(cuerpo : string) {
        this._cuerpo = cuerpo;
    }
    

}