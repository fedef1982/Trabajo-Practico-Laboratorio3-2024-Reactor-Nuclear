import BarrasDeControl from "../refrigeracion/barrasDeControl";
import INucleo from "./INucleo";
import ISensor from "./ISensor";
import Sensor from "./sensor";

export default class Nucleo {
    private _barraDeControl : BarrasDeControl;
    private _temperatura : number;
    private _sensor : ISensor;

    constructor(barras? : BarrasDeControl, sensor? : ISensor){
        this._barraDeControl = barras ?? new BarrasDeControl(-1);
        this._sensor = sensor ?? new Sensor();
        this._temperatura = -1;
    }

    public get temperatura() : number {
        return this._temperatura;
    }

    public set temperatura(temperatura : number) {
        this._temperatura = temperatura;
    }

    public get sensor() : ISensor {
        return this._sensor;
    }

    public set sensor(sensor : ISensor) {
        this._sensor = sensor;
    }

    insertarBarraDeControl(barra: BarrasDeControl) {
        this._barraDeControl = barra;
    }

    sacarBarraDeControl(): void {
        this._barraDeControl.tiempoVidaUtil = 0;
       
    }

}