import EstadoReactor from "../estadosReactor/estadoReactor";
import EstadoReactorApagado from "../estadosReactor/estadoReactorApagado";
import EstadoReactorEncendido from "../estadosReactor/estadoReactorEncendido";
import ICombustible from "./ICombustible";
import INucleo from "./INucleo";
import IGenerador from "./generador/IGenerador";


export default class Reactor{
    private _capacidad : number;
    private _combustible : ICombustible;
    private _estado : EstadoReactor = undefined as unknown as EstadoReactor;
    private _nucleo : INucleo;
    private _generador : IGenerador;
    private _energiaProducida : number;

    constructor(capacidad : number, combustible : ICombustible,  nucleo : INucleo, generador : IGenerador){
        this._capacidad = capacidad;
        this._combustible = combustible;
        this._nucleo = nucleo;
        this.estado = new EstadoReactorApagado();
        this._energiaProducida = 0;
        this._generador = generador;
    }

    public get capacidad() : number {
        return  this._capacidad;
    }
    
    public set capacidad(capacidad : number){
        this._capacidad = capacidad;
    }

    public get estado() : EstadoReactor {
        return  this._estado;
    }

    public set estado(estado : EstadoReactor) {
        this._estado = estado;
        this._estado.setReactor = this;
    }

    public get nucleo() : INucleo{
        return this._nucleo;
    }

    public get combustible() : ICombustible {
        return this._combustible;
    }
    
    public set combustible(combustible : ICombustible){
        this._combustible = combustible;
    }

    public get energiaProducida() : number {
        return this._energiaProducida;
    }

    public set energiaProducida(energiaProducida : number) {
        this._energiaProducida = energiaProducida;
    }

    public get generador() : IGenerador {
        return this._generador;
    }

    //°---Métodos-------------->

    public iniciar() {
        this.energiaProducida = 0;
        
        this.estado = new EstadoReactorEncendido();
    }

   
    public detener() {
        this.estado = new EstadoReactorApagado();
    }

    
    public generarEnergia(horas : number) {
        this.estado.generarEnergia(horas);
    }

}