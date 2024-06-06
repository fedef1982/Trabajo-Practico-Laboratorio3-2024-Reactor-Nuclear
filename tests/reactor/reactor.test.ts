import ICombustible from "../../src/reactor/ICombustible";
import IEstadoReactor from "../../src/reactor/IEstadoReactor";
import INucleo from "../../src/reactor/INucleo";
import ISensor from "../../src/reactor/ISensor";
import Reactor from "../../src/reactor/reactor";
import * as MOCKS from "../mocks";


describe("Testea la clase reactor", () => {
    let instance : Reactor;
    let mockSensor : ISensor;
    let mockEstadoManager : IEstadoReactor;
    let mockCombustible : ICombustible;
    let mockNucleo : INucleo;
    let capacidad : number;

    beforeEach( () => {
        mockSensor = MOCKS.MockSensor;
        mockEstadoManager = MOCKS.MockEstadoManager;
        mockCombustible = MOCKS.MockCombustible;
        mockNucleo = MOCKS.MockNucleo;
        capacidad = 700;

        instance = new Reactor(capacidad, mockCombustible, mockSensor, mockEstadoManager ,mockNucleo);
    })

    describe("Testea el método iniciar()", () => {
        
        it("debería aumentar la temperatura del reactor", () => {
            // Guarda la temperatura inicial del reactor
            const temperaturaInicial = instance.temperatura;
            
            instance.iniciar();
            
            // Verifica que la temperatura del reactor haya aumentado
            expect(instance.temperatura).toBeGreaterThan(temperaturaInicial);
        });

        it("Al iniciar se debería generar energía hasta que se acabe el combustible.", () => {
            mockCombustible.cantidadCombustible = 2;

            instance.iniciar();

            expect(mockCombustible.getCantidadCombustible).toBe(0);
        }) 
    });

    describe("Testea el método detener()", () => {
        it("La temperatura debería ser 1 cuando el reactor se detiene.", () => {
            instance.iniciar();

            instance.detener();
            expect(instance.temperatura).toBe(1);
        })
    });

    describe("Testea el método disminuirEnergia()", () => {
        
        it("Con un porcentaje de reducción de 20 (20%) y una temperatura actual de 100, la temperatura debería disminuir a 80.", () => {
            mockSensor.temperaturaReactor = 100;
            instance.disminuirEnergia(20);

            expect(instance.temperatura).toBe(80);
        })

        it("Con un porcentaje de reducción de 2 (2%) y una temperatura actual de 10, la temperatura debería ser 9.8", () => {
            mockSensor.temperaturaReactor = 10;
            instance.disminuirEnergia(2);

            expect(instance.temperatura).toBe(9.8);
        })
    });

    describe("Testea que los atributos se seteen de forma correcta.", () => {
        it("testeo el setter para la capacidad", () => {
            instance.capacidad = 7;
            expect(instance.capacidad).toBe(7);
        })
    })

})