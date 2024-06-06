import { EstadoReactor } from "../src/enums/estadoReactor";
import ICombustible from "../src/reactor/ICombustible";
import INucleo from "../src/reactor/INucleo";

export const MockSensor = {
    _temperaturaReactor : 1,

    get getTemperaturaReactor(){
        return this._temperaturaReactor;
    } ,
    set temperaturaReactor(temperatura : number) {
        this._temperaturaReactor = temperatura;
    },
};

export const MockEstadoManager = {
    actualizarEstado: jest.fn(),
    estado: EstadoReactor.ENCENDIDO
};


export const MockCombustible = {
    _cantCombustible : 10,
    _porcentajeAumento : 20,
    
    set cantidadCombustible(cantCombustible : number) {
        this._cantCombustible = cantCombustible;
    },
    get getCantidadCombustible() : number {
        return this._cantCombustible;
    },
    get porcentajeAumentoTemperatura() : number {
        return this._porcentajeAumento;
    }
};

export const MockNucleo : INucleo = {
    insertarBarraDeControl: jest.fn(),
    obtenerBarraDeControl: jest.fn()
}