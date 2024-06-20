import Sensor from "../../src/reactor/sensor";
import ISuscriptorTemperatura from "../../src/reactor/ISuscriptorTemperatura";
import * as MOCKS from "../mocks";

describe('Sensor', () => {
  let instance: Sensor;
  let mockSuscriptor: ISuscriptorTemperatura;

  beforeEach(() => {
    instance = new Sensor();
    mockSuscriptor = MOCKS.mockSuscriptor;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería inicializar con la temperatura correcta', () => {
    expect(instance.getTemperaturaNucleo).toBe(1);
  });

  it('debería permitir suscribir suscriptores', () => {
    instance.suscribir(mockSuscriptor);
    instance.temperaturaNucleo = 100;

    expect(mockSuscriptor.actualizarTemperatura).toHaveBeenCalledWith(100);
  });

  it('debería permitir desuscribir suscriptores', () => {
    instance.suscribir(mockSuscriptor);
    instance.desuscribir(mockSuscriptor);
    instance.temperaturaNucleo = 100;

    expect(mockSuscriptor.actualizarTemperatura).not.toHaveBeenCalled();
  });

  it('debería notificar a todos los suscriptores cuando la temperatura cambia', () => {
    const anotherMockSuscriptor: ISuscriptorTemperatura = {
      actualizarTemperatura: jest.fn(),
    };

    instance.suscribir(mockSuscriptor);
    instance.suscribir(anotherMockSuscriptor);
    instance.temperaturaNucleo = 200;

    expect(mockSuscriptor.actualizarTemperatura).toHaveBeenCalledWith(200);
    expect(anotherMockSuscriptor.actualizarTemperatura).toHaveBeenCalledWith(200);
  });

  it('debería actualizar la temperatura correctamente', () => {
    instance.temperaturaNucleo = 150;
    expect(instance.getTemperaturaNucleo).toBe(150);
  });
});
