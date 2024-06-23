import Generador from "../../../src/reactor/generador/Generador";
import ISuscriptorEnergiaNeta from "../../../src/reactor/generador/ISuscriptorEnegiaNeta";

describe("Testea la clase Generador,", () => {
    let instance : Generador;
    let mockSuscriptor: jest.Mocked<ISuscriptorEnergiaNeta>;

    beforeEach( () => {
        instance = new Generador();   
        mockSuscriptor = {
            actualizarEnergiaNeta: jest.fn(),
        };    
    });

    describe("Testeo el método GenerarEnergia()", () => {
        it("Al pasarle una temperatura menor a 280° no debe generar energía sin importar la capacidad productiva.", () => {

            expect(instance.generarEnergia(100, 100)).toBe(0);
        });

        it("Al pasarle una temperatura de 280° debe generar 100MWe de energía neta.", () => {
            expect(instance.generarEnergia(100,280)).toBe(100);
        })

        it("Al pasarle una temperatura de 280° y una capacidad productiva de 80 debe generar 80MWe de energía neta.", () => {
            expect(instance.generarEnergia(80,280)).toBe(80);
        })

        it("Al pasarle una temperatura de 304.99° debe generar 349.99MWe de energía neta.", () => {
            expect(instance.generarEnergia(100,304.99)).toBe(349.89);
        })

        it("Al pasarle una temperatura de 329.98° debe generar 700.00MWe de energía neta.", () => {
            expect(instance.generarEnergia(100,329.98)).toBe(699.75);
        })
    })

    describe("Testeo el getter de energia producida.", () => {

        it("Al pasarle una temperatura de 100° no debe producir energía por lo tanto debe setear _energiaProducida en cero.", () => {
            instance.generarEnergia(100, 100);
            expect(instance.energiaNeta).toBe(0);
        })
    })
    
    describe("Testeo el método suscribir()", () => {
        it("Deberia agragar suscriptor array de suscriptores", () => {
            instance.suscribir(mockSuscriptor);
            expect(instance.suscriptoresEnergiaNeta).toContain(mockSuscriptor);
        });
    })

    describe("Testeo el método desuscribir()", () => {
        it("Deberia quitar suscriptor array de suscriptores", () => {
            instance.suscribir(mockSuscriptor);
            instance.desuscribir(mockSuscriptor);
            expect(instance.suscriptoresEnergiaNeta).not.toContain(mockSuscriptor);

        });
    })
    describe("Testeo el método notificar()", () => {
        it("Deberia notificar a los subscriptos", () => {
            instance.suscribir(mockSuscriptor);
            instance.generarEnergia(100,280);
            instance.notificarEnergiaNeta();
            expect(mockSuscriptor.actualizarEnergiaNeta).toHaveBeenCalledWith(100);
        });
    })
})