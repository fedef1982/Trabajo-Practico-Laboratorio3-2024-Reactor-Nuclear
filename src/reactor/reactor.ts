import {EstadoReactor} from "../enums/estadoReactor";
import ICombustible from "./ICombustible";
import IEstadoReactor from "./IEstadoReactor";
import INucleo from "./INucleo";
import ISensor from "./ISensor";


export default class Reactor{
    private _capacidad : number;
    private _combustible : ICombustible;
    private _sensor : ISensor;
    private _estadoReactorManager : IEstadoReactor;
    private _nucleo : INucleo;

    constructor(capacidad : number, combustible : ICombustible, sensor : ISensor, estadoManager : IEstadoReactor, nucleo : INucleo){
        this._capacidad = capacidad;
        this._combustible = combustible;
        this._sensor = sensor;
        this._estadoReactorManager = estadoManager;
        this._nucleo = nucleo;
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

    public set capacidad(capacidad : number){
        this._capacidad = capacidad;
    }
    public set combustible(combustible : ICombustible){
        this._combustible = combustible;
    }
    public set sensor(sensor : ISensor){
        this._sensor = sensor;
    }
    public set estadoManager(estadoManager : IEstadoReactor){
        this._estadoReactorManager = estadoManager;
    }
    public set nucleo(nucleo : INucleo){
        this._nucleo = nucleo;
    }

    //°---Métodos-------------->

    public iniciar() {//comienza a generar energia hasta que se acabe el combustible
        while(this._combustible.getCantidadCombustible > 0) {
            this.generarEnergia();
        }
    }

    public detener() {
        this._sensor.temperaturaReactor = 1;
    }

    public disminuirEnergia(porcentajeReduccion : number) {//baja la temperatura
        let temperatura = this._sensor.getTemperaturaReactor;

        temperatura -= ((temperatura * porcentajeReduccion) / 100);

        this._sensor.temperaturaReactor = temperatura;
    }

    private generarEnergia() {
        let temperatura : number = this._sensor.getTemperaturaReactor;

        temperatura += temperatura * (this._combustible.porcentajeAumentoTemperatura / 100);
        this._sensor.temperaturaReactor = temperatura;

        let combustibleActual = this._combustible.getCantidadCombustible;

        this._combustible.cantidadCombustible = combustibleActual - 1;
    }

}