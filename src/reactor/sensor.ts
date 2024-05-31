import ISensor from "./ISensor";

export default class Sensor implements ISensor{
    private _temperaturaReactor : number;

    constructor() {
        this._temperaturaReactor = 1;//temperatura inicial
    }

    public set temperaturaReactor(temperatura : number) {
        this._temperaturaReactor = temperatura;
    }
    public get getTemperaturaReactor () : number {
        return this._temperaturaReactor;
    }

}