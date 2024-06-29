import * as Mocks from "../mocksReactor";
import Reactor from "../../src/reactor/reactor";
import EstadoReactorCritico from "../../src/estadosReactor/estadoReactorCritico";
import ISuscriptorEstadoApagado from "../../src/estadosReactor/ISuscriptorEstadoApagado";

describe("EstadoReactorCritico", () => {
  let reactor: Reactor;
  let estadoCritico: EstadoReactorCritico;
  let suscriptor : ISuscriptorEstadoApagado;

  beforeEach(() => {
    reactor = Mocks.mockReactor;
    suscriptor = Mocks.mockSuscriptorApagado;

    estadoCritico = new EstadoReactorCritico();
    reactor.estado = estadoCritico;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Verificar el correcto funcionamiento de los metodos para suscribir y desuscribir", () => {
    estadoCritico.suscribir(suscriptor);
    expect(estadoCritico['_suscriptores'].length).toBe(2);
    estadoCritico.desuscribir(suscriptor);
    expect(estadoCritico['_suscriptores'].length).toBe(1);
  });

  it("Se espera recibir una excepcion al no poder generar energia", () =>{
    expect(() => {
        estadoCritico.generarEnergia(1);
    }).toThrow(Error);
  });

  it("Se espera recibir una excepcion al no poder generar energia", () =>{
    estadoCritico.suscribir(suscriptor);
    estadoCritico.notificarSrBurns();
    expect(suscriptor.recibirAlerta).toHaveBeenCalledTimes(1);
  });

  it("Verificar si todos los metodos de situacion critica fueron invocados", () =>{
    estadoCritico.suscribir(suscriptor);
    estadoCritico.situacionCritica();
    expect(reactor.detener).toHaveBeenCalledTimes(1);
    expect(suscriptor.recibirAlerta).toHaveBeenCalledTimes(1);
  });
});