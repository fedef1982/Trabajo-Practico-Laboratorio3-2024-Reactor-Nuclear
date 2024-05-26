import CalcularPorcentajeReduccion from "./CalcularPorcentajeReduccion";

export default class BarrasDeControl implements CalcularPorcentajeReduccion{
    private _porcentajeReduccion : number;
    private _tiempoVidaUtil : number;

    constructor(t? : number){
        this._porcentajeReduccion = -1;
        this._tiempoVidaUtil = -1;
        if (t != undefined) {
            this._tiempoVidaUtil = t;
        }
    }
    
    public get tiempoVidaUtil() : number {
        return this._tiempoVidaUtil;
    }
    
    public set tiempoVidaUtil(tiempo : number){
        this._tiempoVidaUtil = tiempo;
    }    

    getPorcentajeReduccion(): number {
        return this._porcentajeReduccion;
    }

    public setPorcentajeReduccion() : void{
       this._porcentajeReduccion = (this._tiempoVidaUtil /3600) * 100;
    }
}