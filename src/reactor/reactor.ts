import {EstadoReactor} from "../enums/estadoReactor";
import ICombustible from "./ICombustible";
import IEstadoReactor from "./IEstadoReactor";
import ISensor from "./ISensor";


export default class Reactor{
    private _capacidad : number; //capacidad 700MW/h puede generar hasta 700MWe
    private _combustible : ICombustible;
    private _sensor : ISensor;
    private _estadoReactorManager : IEstadoReactor;
    private _barrasDeControl : IBarraDeControl;

    constructor(sensor: ISensor, combustible : ICombustible, estadoManager : IEstadoReactor){
        this._capacidad = 700;
        this._sensor = sensor;
        this._combustible = combustible;
        this._estadoReactorManager = estadoManager;
    }

    public get capacidad() : number {
        return  this._capacidad;
    }

    public get temperatura() : number {
        return  this._sensor.getTemperaturaReactor;
    }

    public get estado() : EstadoReactor {
        return  this._estadoReactorManager.estado;
    }


    //°---Métodos-------------->

    public iniciar() {//comienza a generar energia hasta que se acabe el combustible
        while(this._combustible.getCantidadCombustible > 0) {
            this.generarEnergia();
        }
    }

    public detener() {
        this._sensor.temperaturaReactor = 0;
        this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);

    }

    public disminuirEnergia(porcentajeReduccion : number) {//baja la temperatura

        this._sensor.temperaturaReactor -= 
        (this._sensor.temperaturaReactor * porcentajeReduccion / 100);

        this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);
    }

    private generarEnergia() {

        let temperatura : number = this._sensor.getTemperaturaReactor;

        temperatura += temperatura * (this._combustible.porcentajeAumentoTemperatura / 100);
        this._sensor.temperaturaReactor = temperatura;

        this._combustible.cantidadCombustible -= 1;
        this._estadoReactorManager.actualizarEstado(this._sensor.getTemperaturaReactor);

    }

}