import ISensor from "./ISensor";
import ISuscriptorTemperatura from "./ISuscriptorTemperatura";

export default class Sensor implements ISensor{
    private _temperaturaReactor : number;
    private _suscriptores : ISuscriptorTemperatura[];

    constructor() {
        this._temperaturaReactor = 1;//temperatura inicial
        this._suscriptores = [];
    }

    public set temperaturaReactor(temperatura : number) {
        this._temperaturaReactor = temperatura;
        this.notificar();
    }
    
    public get getTemperaturaReactor () : number {
        return this._temperaturaReactor;
    }

    public suscribir(suscriptor : ISuscriptorTemperatura) {
        this._suscriptores.push(suscriptor);
    }

    public desuscribir(suscriptor : ISuscriptorTemperatura) {
        this._suscriptores = this._suscriptores.filter( (suscrip) => suscrip !== suscriptor);
    }

    private notificar() : void {
        this._suscriptores.forEach( (suscriptor) => {
            suscriptor.actualizar(this._temperaturaReactor);
        })
    }

}