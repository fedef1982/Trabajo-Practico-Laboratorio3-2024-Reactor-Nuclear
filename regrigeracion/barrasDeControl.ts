import Refrigerable from "./refrigerable";
import Reactor from "../reactor/reactor";

export default class BarrasDeControl implements Refrigerable{
    private _porcentajeReduccion : number;
    private _tiempoVidaUtil : number;

    constructor(tiempoVidaUtil? : number){
        this._porcentajeReduccion = -1;
        this._tiempoVidaUtil = -1;
        if (tiempoVidaUtil != undefined) {
            this._tiempoVidaUtil = tiempoVidaUtil;
        }
    }

    public get tiempoVidaUtil() : number {
        return this._tiempoVidaUtil;
    }

    public set tiempoVidaUtil(tiempo : number){
        this._tiempoVidaUtil = tiempo;
    }    

    public get porcentajeReduccion() : number {
        return this._porcentajeReduccion;
    }

    public actualizarUtilidad() : void{
       this._porcentajeReduccion = (this._tiempoVidaUtil /3600) * 100;
       this.restarVidaUtil();
    }

    public restarVidaUtil () : void{
        this._tiempoVidaUtil--;
    }

    esUtil() : boolean{
        if (this._tiempoVidaUtil === 0){
            return false;
        } 
        return true;
    }

    disminuirTemperatura(reactor : Reactor){
        this.actualizarUtilidad();
        reactor.disminuirEnergia(this._porcentajeReduccion);
    }
}