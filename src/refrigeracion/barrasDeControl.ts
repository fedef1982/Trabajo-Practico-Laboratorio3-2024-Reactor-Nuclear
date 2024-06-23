export default class BarrasDeControl{
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
        this.actualizarUtilidad();
        return this._porcentajeReduccion;
    }

    private actualizarUtilidad() : void{
       this._porcentajeReduccion = (this._tiempoVidaUtil /3600) * 100;
       this.restarVidaUtil();
    }

    private restarVidaUtil () : void{
        this._tiempoVidaUtil--;
    }
}