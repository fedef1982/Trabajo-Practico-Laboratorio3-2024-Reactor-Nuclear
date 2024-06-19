import IBuilderRactor from "./IBuilderReactor";
import ICombustible from "./ICombustible";
import INucleo from "./INucleo";
import IGenerador from "./generador/Generador";
import Reactor from "./reactor";


export default class BuilderReactor implements IBuilderRactor {
    private _capacidad : number = undefined as unknown as number;
    private _combustible : ICombustible = undefined as unknown as ICombustible;
    private _nucleo : INucleo = undefined as unknown as INucleo;
    private _generador : IGenerador = undefined as unknown as IGenerador;

    constructor() {}

    setCapacidad(capacidad: number): void {
        this._capacidad = capacidad;
    }
    setCombustible(combustible: ICombustible): void {
        this._combustible = combustible;
    }
    setNucleo(nucleo: INucleo): void {
        this._nucleo = nucleo;
    }
    setGenerador(generador: IGenerador): void {
        this._generador = generador;
    }

   
    public getReactor() : Reactor {
        return new Reactor(this._capacidad, this._combustible, this._nucleo, this._generador);
    }
    
}