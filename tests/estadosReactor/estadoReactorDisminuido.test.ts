import ISuscriptorEstadoDisminuido from "../../src/estadosReactor/ISuscriptorEstadoDisminuido";
import EstadoReactorDisminuido from "../../src/estadosReactor/estadoReactorDisminuido";
import * as MOCKS from '../mocks';
import Reactor from "../../src/reactor/reactor";
import EstadoReactorCritico from "../../src/estadosReactor/estadoReactorCritico";

describe("Testeo la clase EstadoReactorDisminuido.", () => {
    let instance: EstadoReactorDisminuido;
    let mockSuscriptor : ISuscriptorEstadoDisminuido;
    let mockReactor : Reactor;

    beforeEach(() => {
        mockReactor = MOCKS.mockReactor;
        instance = new EstadoReactorDisminuido();
        instance.setReactor = mockReactor;
        mockSuscriptor = MOCKS.mockSuscriptorEstadoDisminuido;
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Testeo el método generarEnergia()", () => {
        it("Al llamar al método generarEnergia se debe llamar al método privado notificarEstado()", () => {
            let horas: number = 10;

            const notificarEstadoSpy = jest.spyOn(instance as any, 'notificarEstado').mockImplementation(() => {});

            instance.generarEnergia(horas);

            expect(notificarEstadoSpy).toHaveBeenCalled();
            notificarEstadoSpy.mockRestore();
        });

        it("Debe generar energía correctamente mientras la temperatura sea < 400 y haya combustible", () => {
            MOCKS.mockCombustible.cantidadCombustible = 100;
            MOCKS.mockNucleo.temperatura = 1;
            instance.generarEnergia(5);

            expect(mockReactor.generador.generarEnergia).toHaveBeenCalledTimes(5);
            expect(mockReactor.nucleo.temperatura).toBe(140);
        });

        it("Cuando la temperatura pasa los 400 grados debe cambiar el estado del reactor a Critico.", () => {
            MOCKS.mockCombustible.cantidadCombustible = 100;
            mockReactor.nucleo.temperatura = 399;
            MOCKS.mockSensor.getTemperaturaNucleo = 399;
            instance.generarEnergia(1);

            expect(mockReactor.estado).toBeInstanceOf(EstadoReactorCritico);
        })
    });

    describe("Testea el método suscribir()", () => {
        it("Al llamar al métod suscribir debe agregar un suscriptor al array de suscriptores.", () => {
            instance.suscribir(mockSuscriptor);
            expect(instance["_suscriptores"].length).toBe(1);
        })
    });

    describe("Testea el método desuscribir()", () => {
        it("Al llamar a desuscribir el array de suscriptores no debe tener elementos.", () => {
            instance.suscribir(mockSuscriptor);
            instance.desuscribir(mockSuscriptor);
            expect(instance["_suscriptores"].length).toBe(0);
        })
    });


});
