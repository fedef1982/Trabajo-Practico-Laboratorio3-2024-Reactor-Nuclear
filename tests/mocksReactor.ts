import Reactor from "../src/reactor/reactor";
import EstadoReactor from "../src/estadosReactor/estadoReactor";



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
  
  export const mockReactor = {
    _estado: jest.mocked<EstadoReactor>,
    _nucleo: mockNucleo,
    _generador: mockGenerador,
    _combustible: {
      porcentajeAumentoTemperatura: 100,
      cantidadCombustible: 100,
    },
    _capacidad: 0, // Ajusta según sea necesario
    _energiaProducida: 0, // Ajusta según sea necesario
  
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
  } as any;