import ICombustible from "../../src/reactor/ICombustible";
import IEstadoReactor from "../../src/reactor/IEstadoReactor";
import ISensor from "../../src/reactor/ISensor";
import Reactor from "../../src/reactor/reactor";
import * as MOCKS from "../mocks";


describe("Teste a la clase reactor", () => {
    let instance : Reactor;
    let mockSensor : ISensor;
    let mockEstadoManager : IEstadoReactor;
    let combustible : ICombustible;


   
    beforeEach( () => {
        combustible = MOCKS.MockCombustible;
        mockSensor = MOCKS.MockSensor;
        mockEstadoManager = MOCKS.MockEstadoManager;
        instance = new Reactor(mockSensor, combustible, mockEstadoManager);
    })

    describe("Testea el método iniciar()", () => {
        
        it("debería aumentar la temperatura del reactor", () => {
            // Guarda la temperatura inicial del reactor
            const temperaturaInicial = instance.temperatura;
            
            instance.iniciar();
            
            // Verifica que la temperatura del reactor haya aumentado
            expect(instance.temperatura).toBeGreaterThan(temperaturaInicial);
        });
    });
})