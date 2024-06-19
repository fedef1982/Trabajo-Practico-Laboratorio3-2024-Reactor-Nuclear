import ICombustible from "../../src/reactor/ICombustible";
import Reactor from "../../src/reactor/reactor";
import INucleo from "../../src/reactor/INucleo";
import IGenerador from "../../src/reactor/generador/Generador";
import * as MOCKS from "../mocks";
import EstadoReactorApagado from "../../src/estadosReactor/estadoReactorApagado";
import EstadoReactorEncendido from "../../src/estadosReactor/estadoReactorEncendido";

describe('Reactor', () => {
    let instance : Reactor;
    let mockCapacidad : number;
    let mockCombustible : ICombustible;
    let mockNucleo : INucleo;
    let mockGenerador : IGenerador; 

    beforeEach(() => {
        mockCapacidad = 700;
        mockCombustible = MOCKS.mockCombustible;
        mockNucleo = MOCKS.mockNucleo;
        mockGenerador = MOCKS.mockGenerador;
        instance = new Reactor(mockCapacidad, mockCombustible, mockNucleo, mockGenerador);
    });

    it('Al iniciar el estado debe cambiar a encendido.', () => {
        instance.iniciar();
        expect(instance.estado).toBeInstanceOf(EstadoReactorEncendido);
    });

    it('Al detener el estado debe cambiar a apagado.', () => {
        instance.iniciar();
        instance.detener();
        expect(instance.estado).toBeInstanceOf(EstadoReactorApagado);
    });

});
