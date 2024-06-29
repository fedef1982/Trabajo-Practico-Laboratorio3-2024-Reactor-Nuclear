import BarrasDeControl from "../refrigeracion/barrasDeControl";
import ISensor from "./ISensor";
import Sensor from "./sensor";
import INucleo from "./INucleo";

export default class Nucleo implements INucleo{
    private _barraDeControl : BarrasDeControl;
    private _sensor : ISensor;

    constructor(barras? : BarrasDeControl, sensor? : ISensor){
        this._barraDeControl = barras ?? new BarrasDeControl(-1);
        this._sensor = sensor ?? new Sensor();
    }

    get temperatura() : number {
        return this._sensor.getTemperaturaNucleo;
    }

    set temperatura(temperatura : number) {
        this._sensor.temperaturaNucleo = temperatura;
    }

    get sensor() : ISensor {
        return this._sensor;
    }

    set sensor(sensor : ISensor) {
        this._sensor = sensor;
    }

    insertarBarraDeControl(barra: BarrasDeControl) {
        this._barraDeControl = barra;
    }

    sacarBarraDeControl(): void {
        this._barraDeControl.tiempoVidaUtil = 0;
    }

}