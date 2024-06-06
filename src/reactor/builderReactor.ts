import IBuilderRactor from "./IBuilderReactor";
import ICombustible from "./ICombustible";
import IEstadoReactor from "./IEstadoReactor";
import INucleo from "./INucleo";
import ISensor from "./ISensor";
import Reactor from "./reactor";

export default class BuilderReactor implements IBuilderRactor {
    //private _reactor! : Reactor; 
    //La definite assignment assertion se utiliza para indicar al compilador que la variable ha sido asignada.

    private _capacidad : number;
    private _combustible : ICombustible;
    private _sensor : ISensor;
    private _estadoReactorManager : IEstadoReactor;
    private _nucleo : INucleo;

    constructor() {}

    public setCapacidad(capacidad: number): void {
        this._capacidad = capacidad;
    }

    public setCombustible(combustible: ICombustible): void {
        this._combustible = combustible;
    }

    public setSensor(sensor: ISensor): void {
        this._sensor = sensor;
    }

    public setEstadoManager(estadoManager: IEstadoReactor): void {
        this._estadoReactorManager = estadoManager;
    }

    public setNucleo(nucleo: INucleo): void {
        this._nucleo = nucleo;
    }

    public getReactor() : Reactor {
        return new Reactor(this._capacidad, this._combustible, this._sensor, this._estadoReactorManager, this._nucleo);
    }
    
}