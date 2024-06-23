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


    describe("Testea los getters y setters", () => {

        it('debería obtener la capacidad correctamente', () => {
            expect(instance.capacidad).toBe(700);
        });
        
        it('debería permitir cambiar la capacidad correctamente', () => {
            instance.capacidad = 1500;
            expect(instance.capacidad).toBe(1500);
        });
        
        it('debería obtener el estado inicializado correctamente', () => {
            expect(instance.estado).toBeInstanceOf(EstadoReactorApagado);
        });
        
        it('debería permitir cambiar el estado correctamente', () => {
            const nuevoEstado = MOCKS.mockEstadoReactorEncendido;
            instance.estado = nuevoEstado;
            expect(instance.estado).toBe(nuevoEstado);
        });
        
        it('debería obtener el núcleo correctamente', () => {
            expect(instance.nucleo).toBe(mockNucleo);
        });
        
        it('debería obtener el combustible correctamente', () => {
            expect(instance.combustible).toBe(mockCombustible);
        });
        
        it('debería permitir cambiar el combustible correctamente', () => {
            const nuevoCombustible: ICombustible = {
              cantidadCombustible: 200,
              porcentajeAumentoTemperatura: 20,
            };
            instance.combustible = nuevoCombustible;
            expect(instance.combustible).toBe(nuevoCombustible);
        });
        
        it('debería obtener la energía producida correctamente', () => {
            expect(instance.energiaProducida).toBe(0);
        });
        
        it('debería permitir cambiar la energía producida correctamente', () => {
            instance.energiaProducida = 500;
            expect(instance.energiaProducida).toBe(500);
        });
    })
});
