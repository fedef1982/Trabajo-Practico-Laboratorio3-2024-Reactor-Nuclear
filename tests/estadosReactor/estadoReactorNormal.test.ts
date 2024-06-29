import * as Mocks from "../mocksReactor";
import EstadoReactorNormal from "../../src/estadosReactor/estadoReactorNormal";
import Reactor from '../../src/reactor/reactor';
import EstadoReactorApagado from "../../src/estadosReactor/estadoReactorApagado";

describe('EstadoReactorNormal', () => {
  let reactor: Reactor;
  let estadoNormal: EstadoReactorNormal;

  beforeEach(() => {
    reactor = Mocks.mockReactor;
    reactor.nucleo.temperatura = 281;

    estadoNormal = new EstadoReactorNormal();
    reactor.estado = estadoNormal;
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Deberia aumentar la temperatura del nucleo", () => {
    const initialTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;
    estadoNormal.generarEnergia(10);
    const finalTemperature = reactor.nucleo.sensor.getTemperaturaNucleo;

    expect(finalTemperature).toBeGreaterThan(initialTemperature);
  });

  it("Deberia dar false el equals", () => {
    const nuevoEstado = new EstadoReactorApagado();
    expect(estadoNormal.equals(nuevoEstado)).toBeFalsy();
  })

});