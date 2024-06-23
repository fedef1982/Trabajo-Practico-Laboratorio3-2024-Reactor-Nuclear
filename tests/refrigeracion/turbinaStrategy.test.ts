import INucleo from "../../src/reactor/INucleo";
import ISensor from "../../src/reactor/ISensor";
import Reactor from "../../src/reactor/reactor";
import Turbina from "../../src/refrigeracion/turbina";
import Nucleo from "../../src/reactor/nucleo";
import TurbinaStrategy from "../../src/refrigeracion/turbinaStrategy";
import * as MOCKS from "../mocks";
import Sensor from "../../src/reactor/sensor";

describe("Turbina strategy", () => {

    let instance : TurbinaStrategy;
    
    let mockTurbina : Turbina;
    let mockTurbina2 : Turbina;
    let mockReactor : Reactor;
    let mockSensor : ISensor;
    let mockNucleo : INucleo;
 
    beforeEach(() => {
        mockTurbina = MOCKS.mockTurbina;
        mockTurbina2 = MOCKS.mockTurbina;
        mockReactor = MOCKS.mockReactor2;
        //mockSensor = MOCKS.mockSensor;
        //mockNucleo = MOCKS.mockNucleo2;
        
        instance = new TurbinaStrategy([mockTurbina, mockTurbina2]);
        mockReactor = MOCKS.mockReactor2;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
  
    it("Test disminuirTemperatura() de 100 a 90", () => {
    
        
        instance.disminuirTemperatura(10,mockReactor);

        expect(mockReactor.nucleo.temperatura).toBe(90);
  

    });

    it("Test enfriar() con varias turbinas de 100 a 81", () => {
    
        const disminuir = jest.spyOn(instance,"disminuirTemperatura");

        instance.enfriar(mockReactor);

        expect(disminuir).toHaveBeenCalledTimes(2);
        

    });
    

  });