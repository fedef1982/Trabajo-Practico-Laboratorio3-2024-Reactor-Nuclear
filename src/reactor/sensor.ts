import ISensor from "./ISensor";
import ISuscriptorTemperatura from "./ISuscriptorTemperatura";

export default class Sensor implements ISensor{
    private _temperaturaNucleo : number;
    private _suscriptores : ISuscriptorTemperatura[];

    constructor() {
        this._temperaturaNucleo = 1;//temperatura inicial
        this._suscriptores = [];
    }

    public set temperaturaNucleo(temperatura : number) {
        this._temperaturaNucleo = temperatura;
        this.notificar();
    }
    
    public get getTemperaturaNucleo () : number {
        return this._temperaturaNucleo;
    }

    public suscribir(suscriptor : ISuscriptorTemperatura) {
        this._suscriptores.push(suscriptor);
    }

    public desuscribir(suscriptor : ISuscriptorTemperatura) {
        this._suscriptores = this._suscriptores.filter( (suscrip) => suscrip !== suscriptor);
    }

    private notificar() : void {
        this._suscriptores.forEach( (suscriptor) => {
            suscriptor.actualizarTemperatura(this._temperaturaNucleo);
        })
    }

}