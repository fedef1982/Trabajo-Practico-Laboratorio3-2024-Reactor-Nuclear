import ICombustible from "./ICombustible";
import IEstadoReactor from "./IEstadoReactor";
import INucleo from "./INucleo";
import ISensor from "./ISensor";

export default interface IBuilderRactor {
    setCapacidad(capacidad : number) : void;
    setCombustible(combustible : ICombustible) : void;
    setSensor(sensor : ISensor) : void;
    setEstadoManager(estadoManager : IEstadoReactor) : void;
    setNucleo(nucleo : INucleo) : void;
}