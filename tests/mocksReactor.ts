import EstadoReactor from "../src/estadosReactor/estadoReactor";
import EstadoReactorApagado from "../src/estadosReactor/estadoReactorApagado";
import Reactor from "../src/reactor/reactor";

export const mockEstado = {} as any;

export const mockOperador = {} as any;

export const mockStrategy = {
  enfriar : jest.fn((reactor : Reactor) =>{return 0}),
} as any;

export const mockTablero = {} as any;

export const mockSuscriptorApagado = {
  recibirAlerta : jest.fn((estado : EstadoReactorApagado) =>{}),
} as any;

export const mockNucleo = {
    _temperatura: 1,
    _sensor: {
      _temperaturaNucleo: 1,
      get getTemperaturaNucleo() {
        return this._temperaturaNucleo;
      },
      set temperaturaNucleo(temp: number) {
        this._temperaturaNucleo = temp;
      },
    },
    get temperatura() {
      return this._temperatura;
    },
    set temperatura(temp: number) {
      this._temperatura = temp;
      this._sensor.temperaturaNucleo = temp;
    },
    get sensor() {
      return this._sensor;
    },
    set sensor(sensor: any) {
      this._sensor = sensor;
    },
  };
  
  export const mockGenerador = {
    generarEnergia: jest.fn((porcentajeCapacidadProductiva: number, temperaturaNucleoReactor: number) => {
      return 0;
    }),
  };
  
  export const mockSensor = {
    _temperaturaNucleo: 1,
    get temperaturaNucleo() {
      return this._temperaturaNucleo;
    },
    set temperaturaNucleo(temp: number) {
      this._temperaturaNucleo = temp;
    },
  };
  
export const mockCombustible = {
  _porcentajeAumentoTemperatura: 100,
  _cantidadCombustible: 100,

  set porcentajeAumentoTemperatura(por :number){
    this._porcentajeAumentoTemperatura = por;
  },

  get porcentajeAumentoTemperatura() : number{
    return this._porcentajeAumentoTemperatura;
  },

  set cantidadCombustible(cant :number){
    this._cantidadCombustible = cant;
  },

  get cantidadCombustible() : number{
    return this._cantidadCombustible;
  }

} as any;
  
  export const mockReactor = {
    _estado: jest.mocked<EstadoReactor>,
    _nucleo: mockNucleo,
    _generador: mockGenerador,
    _combustible: mockCombustible,
    _capacidad: 0,
    _energiaProducida: 0,
  
    get capacidad() {
      return this._capacidad;
    },
    set capacidad(capacidad: number) {
      this._capacidad = capacidad;
    },
  
    get energiaProducida() {
      return this._energiaProducida;
    },
    set energiaProducida(energia: number) {
      this._energiaProducida = energia;
    },
  
    get nucleo() {
      return this._nucleo;
    },
  
    set generador(generador: any) {
      this._generador = generador;
    },
    get generador() {
      return this._generador;
    },
  
    set estado(estado: EstadoReactor) {
      this._estado = estado;
      this._estado.setReactor = this;
    },
    get estado() {
      return this._estado;
    },
  
    get combustible() {
      return this._combustible;
    },

    iniciar : jest.fn(),
    detener : jest.fn(),

  } as any;