import { CANTIDAD_COMBUSTIBLE_INICIAL, CAPACIDAD_MAX_REACTOR, PORCENTAJE_AUMENTO_TEMPERATURA_REACTOR } from "../constantes";
import IBuilderReactor from "./IBuilderReactor";
import Combustible from "./combustible";
import EstadoReactorManager from "./estadoReactorManager";
import Nucleo from "./nucleo";
import Sensor from "./sensor";


export default class DirectorReactor {
    private _builder : IBuilderReactor;

    constructor(builder : IBuilderReactor) {
        this._builder = builder;
    }

    public cambiarBuilder( builder : IBuilderReactor) : void {
        this._builder = builder;
    }

    public crearReactor() : void {
        this._builder.setCapacidad(CAPACIDAD_MAX_REACTOR);
        this._builder.setCombustible(new Combustible(CANTIDAD_COMBUSTIBLE_INICIAL, PORCENTAJE_AUMENTO_TEMPERATURA_REACTOR));
        this._builder.setSensor(new Sensor());
        this._builder.setEstadoManager(new EstadoReactorManager());
        this._builder.setNucleo(new Nucleo());
    }

}