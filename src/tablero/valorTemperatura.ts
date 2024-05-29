import IMostrable from "./IMostrable";

export default class ValorTemperatura implements IMostrable{

    private _descripcion: string;
    private _valor: number;

    constructor (){
        this._descripcion = "Temperartura Actual de Reactor en °C: " 
        this._valor = 0;
    }

    /**
     * getTemperaturaReactor Recibe como parametro Sensor
     */
    public getTemperaturaReactor(sensor : Sensor){ //punto 5
            this._valor = sensor.temperaturaReactor;
    }
    /**
     * mostrar Implementa mostrar de la interface IMostrable
     */
    public mostrar():string{
        return this._descripcion+this._valor;

    }

}
