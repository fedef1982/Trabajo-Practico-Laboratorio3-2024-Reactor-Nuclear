import * as Mocks from "../mocksReactor";
import Reactor from '../../src/reactor/reactor';
import EstadoReactorDisminuido from "../../src/estadosReactor/estadoReactorDisminuido";
import ISuscriptorEstadoDisminuido from "../../src/estadosReactor/ISuscriptorEstadoDisminuido";

describe('EstadoReactorNormal', () => {
    let reactor: Reactor;
    let estadoDisminuido: EstadoReactorDisminuido;
    let suscriptor : ISuscriptorEstadoDisminuido;

    beforeEach(() => {
        reactor = Mocks.mockReactor;
        reactor.nucleo.temperatura = 331;

        estadoDisminuido = new EstadoReactorDisminuido();
        reactor.estado = estadoDisminuido;
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    })
  
    it("Deberia aumentar la temperatura del nucleo", () => {
      const initialTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;
      estadoDisminuido.generarEnergia(1);
      const finalTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;
  
      expect(finalTemperature).toBeGreaterThan(initialTemperature);
    });
  
    it("Testear el metodo para agregar suscriptores, asi como su desuscripcion", () =>{
        estadoDisminuido.suscribir(suscriptor);
        expect(estadoDisminuido['_suscriptores'].length).toBe(1);
        estadoDisminuido.desuscribir(suscriptor);
        expect(estadoDisminuido['_suscriptores'].length).toBe(0);
    });

  });