import Generador from "../../../src/reactor/generador/Generador";

describe("Testea la clase Generador,", () => {
    let instance : Generador;

    beforeEach( () => {
        instance = new Generador();
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
})