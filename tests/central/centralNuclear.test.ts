import Reactor from "../../src/reactor/reactor";
import * as Mocks from "../mocksReactor";
import Operador from "../../src/operador/operador";
import Tablero from "../../src/tablero/tablero";
import CentralNuclear from "../../src/central/centralNuclear";
import RefrigerableStrategy from "../../src/refrigeracion/refrigerableStrategy";

describe("EstadoReactorCritico", () => {
    let reactor: Reactor;
    let operador : Operador;
    let tablero : Tablero;
    let central : CentralNuclear;

    beforeEach(() => {
      reactor = Mocks.mockReactor;
      operador = Mocks.mockOperador;
      tablero = Mocks.mockTablero;
      central = new CentralNuclear();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("Verificar setter y getter de tablero", () => {
      central.tablero = tablero;
      expect(central['_tablero']).toBe(tablero);
      let otroTablero = Mocks.mockTablero;
      central.tablero = otroTablero;
      expect(central['_tablero']).toBe(tablero);
      tablero = central.tablero;
      expect(tablero).toEqual(otroTablero);
    });
  
    it("Verificar el setter de strategy", () => {
      let strategy : RefrigerableStrategy = Mocks.mockStrategy;
      central.strategy = strategy;
      expect(central['_strategy']).toBe(strategy);
    });

    it("Verificar agregar y quitar operadores", () => {
        central.agregarOperador(operador);
        expect(central['_operadores'].length).toBe(1);
        central.quitarOperador(operador);
        expect(central['_operadores'].length).toBe(0);
    });

    it("Verificar los metodos para iniciar y detener el reactor desde central", () => {
        central.reactor = reactor;  
        central.encenderReactor();
        expect(reactor.iniciar).toHaveBeenCalledTimes(1);
        central.apagarReactor();
        expect(reactor.detener).toHaveBeenCalledTimes(1);
    });

    it("Verificar si se activa el metodo enfriar", () => {
        let strategy : RefrigerableStrategy = Mocks.mockStrategy;
        central.strategy = strategy;
        central.activarMecanismoDeEnfriamiento();
        expect(strategy.enfriar).toHaveBeenCalledTimes(1);
    });

  });