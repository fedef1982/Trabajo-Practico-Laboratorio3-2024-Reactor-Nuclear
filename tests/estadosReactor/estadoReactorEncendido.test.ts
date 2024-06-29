import * as Mocks from "../mocksReactor";
import EstadoReactorEncendido from "../../src/estadosReactor/estadoReactorEncendido";
import EstadoReactorNormal from "../../src/estadosReactor/estadoReactorNormal";
import Reactor from '../../src/reactor/reactor';

describe('EstadoReactorEncendido', () => {
    let reactor : Reactor;
    let estadoEncendido: EstadoReactorEncendido;
  
    beforeEach(() => {
      reactor = Mocks.mockReactor;
  
      estadoEncendido = new EstadoReactorEncendido();
      reactor.estado = estadoEncendido;
    });

    afterEach(() =>{
      jest.clearAllMocks();
    })
    
    it("Deberia aumentar la temperatura durante la generacion de energia", () => {
      const initialTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;
      estadoEncendido.generarEnergia(20);
      const finalTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;
      
      expect(finalTemperature).toBeGreaterThan(initialTemperature);
    });

    it("Deberia disminuir la cantidad de combustible durante el encendido", () => {
      let nuevoReactor = Mocks.mockReactor;
      nuevoReactor.combustible.cantidadCombustible = 100;
      nuevoReactor.nucleo.temperatura = 1;
      const initialFuel = reactor.combustible.cantidadCombustible;
      estadoEncendido.generarEnergia(20);
      const finalFuel = reactor.combustible.cantidadCombustible;
      
      expect(initialFuel).toBeGreaterThan(finalFuel);
    });
    
    it("Deberia cambiar el estado en caso de superar los 280 grados", () => {
      let nuevoReactor = Mocks.mockReactor;
      nuevoReactor.nucleo.temperatura = 280;
      nuevoReactor.estado = new EstadoReactorEncendido();
      nuevoReactor.estado.generarEnergia(1);
      expect(nuevoReactor.estado).toBeInstanceOf(EstadoReactorNormal);
    });
  });