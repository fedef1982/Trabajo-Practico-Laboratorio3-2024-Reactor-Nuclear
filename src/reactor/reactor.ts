import {EstadoReactor} from "../enums/estadoReactor";
import IEstadoReactor from "./IEstadoReactor";
import Sensor from "./sensor";

export default class Reactor{
    private _capacidad : number; //capacidad 700MW/h puede generar hasta 700MWe
    private _estado : EstadoReactor;
    private _combustible : number; //cantidad de barras de uraneo
    private _sensor : Sensor;
    private _porcentajeAumentoTemperatura : number;
    private _estadoReactorManager : IEstadoReactor;

    constructor(sensor: Sensor, porcentajeAumentoTemp : number, combustible : number, estadoManager : IEstadoReactor){
        this._capacidad = 700; 
        this._sensor = sensor;
        this._combustible = combustible;
        this._estado = EstadoReactor.APAGADO;
        this._porcentajeAumentoTemperatura = porcentajeAumentoTemp;
        this._estadoReactorManager = estadoManager;
    }

    public get capacidad() : number {
        return  this._capacidad;
    }

    public get temperatura() : number {
        return  this._sensor.temperaturaReactor;
    }

    public get estado() : EstadoReactor {
        return  this._estado;
    }
    public set estado(estado : EstadoReactor) {
        this._estado = estado;
    }

    public get combustible() : number {
        return this._combustible;
    }
    public set combustible(combustible : number) {
        this._combustible = combustible;
    }

    //°---Métodos-------------->

    public iniciar() {
        while(this._sensor.temperaturaReactor > 280) {
            this.generarEnergia(this._porcentajeAumentoTemperatura);
        }
        this._estado = this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);
    }

    public mantener(porcentajeReduccion : number) {
        while(this._sensor.temperaturaReactor > 329.98){
            this.disminuirEnergia(porcentajeReduccion);
        }
        this._estado = this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);

    }

    public detener() {
        this._sensor.temperaturaReactor = 0;
        this._estado = this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);

    }

    public generarEnergia(porcentajeAumentoTemperatura : number) {
        let temperatura : number = this._sensor.temperaturaReactor;

        this._sensor.temperaturaReactor += temperatura * porcentajeAumentoTemperatura / 100;
        this._combustible -= 1; //1 barra de uraneo??
        this._estado = this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);

    }

    public disminuirEnergia(porcentajeReduccion : number) {//baja la temperatura

        this._sensor.temperaturaReactor -= 
        (this._sensor.temperaturaReactor * porcentajeReduccion / 100);
        this._estado = this._estadoReactorManager.actualizarEstado(this._sensor.temperaturaReactor);
    }

    
}