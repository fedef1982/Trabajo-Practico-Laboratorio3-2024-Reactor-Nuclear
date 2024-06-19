import Nucleo from "../../src/reactor/nucleo";
import BarrasDeControl from "../../src/refrigeracion/barrasDeControl";
import ISensor from "../../src/reactor/ISensor";
import Sensor from "../../src/reactor/sensor";
import * as MOCKS from "../mocks";

describe('Testeo la clase Nucleo', () => {
  let mockBarrasDeControl: BarrasDeControl;
  let mockSensor: ISensor;
  let instance: Nucleo;

  beforeEach(() => {
    mockSensor = MOCKS.mockSensor;
    mockBarrasDeControl = MOCKS.mockBarrasDeControl;
    instance = new Nucleo(mockBarrasDeControl, mockSensor);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería inicializarse con la temperatura correcta', () => {
    expect(instance.temperatura).toBe(-1);
  });

  it('debería actualizar la temperatura y notificar al sensor', () => {
    const nuevaTemperatura = 100;
    instance.temperatura = nuevaTemperatura;
    expect(instance.temperatura).toBe(nuevaTemperatura);
    expect(mockSensor.temperaturaReactor).toBe(nuevaTemperatura);
  });

  it('debería insertar una nueva barra de control', () => {
    const nuevaBarra = { tiempoVidaUtil: 100 } as BarrasDeControl;
    instance.insertarBarraDeControl(nuevaBarra);
    expect((instance as any)._barraDeControl).toBe(nuevaBarra);
  });

  it('debería sacar la barra de control', () => {
    instance.sacarBarraDeControl();
    expect(mockBarrasDeControl.tiempoVidaUtil).toBe(0);
  });

  it('debería obtener y configurar el sensor correctamente', () => {
    const nuevoSensor = { getTemperaturaReactor : 100 } as Sensor;
    instance.sensor = nuevoSensor;
    expect(instance.sensor).toBe(nuevoSensor);
  });
});
