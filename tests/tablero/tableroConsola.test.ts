import Mostrable from '../../src/tablero/mostrable';
import TableroConsola from '../../src/tablero/tableroConsola';
import mockMostrable from '../mockMostrable';

describe('Prueba Clase TableroConsola', () => {
  let tablero: TableroConsola;
  let energiaMock: jest.Mocked<Mostrable>;
  let temperaturaMock: jest.Mocked<Mostrable>;

  beforeEach(() => {
    energiaMock = mockMostrable(100, 'Energía Neta');
    temperaturaMock = mockMostrable(200, 'Temperatura');
    tablero = new TableroConsola(energiaMock,temperaturaMock);
  });

  it('Deberia ser una instancia de TableroConsola', () => {
    expect(tablero).toBeInstanceOf(TableroConsola);
  });

  it('Deberia obtener y modificar energiaNeta', () => {
    expect(tablero.energiaNeta).toBe(energiaMock);
    const nuevaEnergiaMock = mockMostrable(150, 'Nueva Energía Neta');
    tablero.energiaNeta = nuevaEnergiaMock;
    expect(tablero.energiaNeta).toBe(nuevaEnergiaMock);
  });

  it('Deberia obtener y modificar temperatura', () => {
    expect(tablero.temperatura).toBe(temperaturaMock);
    const nuevaTemperaturaMock = mockMostrable(250, 'Nueva Temperatura');
    tablero.temperatura = nuevaTemperaturaMock;
    expect(tablero.temperatura).toBe(nuevaTemperaturaMock);
  });

  it('Deberia actualizar energiaNeta y llamar a mostrarIndicadores', () => {
    tablero.mostrarIndicadores = jest.fn();
    tablero.actualizarEnergiaNeta(120);
    expect(energiaMock.valor).toBe(120);
    expect(tablero.mostrarIndicadores).toHaveBeenCalled();
  });

  it('Deberia actualizar temperatura y llamar a mostrarIndicadores', () => {
    tablero.mostrarIndicadores = jest.fn();
    tablero.actualizarTemperatura(300);
    expect(temperaturaMock.valor).toBe(300);
    expect(tablero.mostrarIndicadores).toHaveBeenCalled();
  });

  it('Deberia llamar console.log con los valores correctos en mostrarIndicadores', () => {
    const consoleLogMock = jest.fn();
    console.log = consoleLogMock;

    energiaMock.mostrar = jest.fn(() => 'Energía Neta : 100');
    temperaturaMock.mostrar = jest.fn(() => 'Temperatura : 200');

    tablero.mostrarIndicadores();

    expect(consoleLogMock).toHaveBeenCalledWith('Energía Neta : 100');
    expect(consoleLogMock).toHaveBeenCalledWith('Temperatura : 200');
  });
});