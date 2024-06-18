import ICombustible from "./ICombustible";
import INucleo from "./INucleo";
import IGenerador from "./IGenerador";

export default interface IBuilderRactor {
    setCapacidad(capacidad : number) : void;
    setCombustible(combustible : ICombustible) : void;
    setNucleo(nucleo : INucleo) : void;
    setGenerador(generador : IGenerador) : void;
}