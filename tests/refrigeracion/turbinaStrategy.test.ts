import INucleo from "../../src/reactor/INucleo";
import ISensor from "../../src/reactor/ISensor";
import Reactor from "../../src/reactor/reactor";
import Turbina from "../../src/refrigeracion/turbina";
import TurbinaStrategy from "../../src/refrigeracion/turbinaStrategy";
import * as MOCKS from "../mocks";

describe("Turbina", () => {

    let instance: TurbinaStrategy;
    let mockTurbina : Turbina;
    let mockReactor : Reactor;
    let mockSensor : ISensor;
    let mockNucleo : INucleo;
  
    beforeEach(() => {
        mockTurbina = MOCKS.mockTurbina;
        mockReactor = MOCKS.mockReactor;
        mockSensor = MOCKS.mockSensor;
        mockNucleo = MOCKS.mockNucleo;
        instance = new TurbinaStrategy([mockTurbina]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
  
    it("Test metodo disminuirTemperatura() de 100 a 50", () => {
        //mockReactor.nucleo.temperatura = 100;
        //mockReactor.nucleo.sensor.temperaturaNucleo = 100;


        instance.disminuirTemperatura(10,mockReactor);

        let temperatura = mockNucleo.temperatura;

        expect(temperatura).toBe(90);

    });
    
    

  });