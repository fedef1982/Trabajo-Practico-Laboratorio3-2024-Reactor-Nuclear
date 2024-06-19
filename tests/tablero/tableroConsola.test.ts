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
    tablero = new TableroConsola();
    tablero.energiaNeta = energiaMock;
    tablero.temperatura = temperaturaMock;
  });

  it('Deberia ser una instancia de TableroConsola', () => {
    expect(tablero).toBeInstanceOf(TableroConsola);
  });

  it('Deberia obtener y modificar energiaNeta', () => {
    expect(tablero.energiaNeta).toBe(energiaMock);
    const newEnergiaMock = mockMostrable(150, 'Nueva Energía Neta');
    tablero.energiaNeta = newEnergiaMock;
    expect(tablero.energiaNeta).toBe(newEnergiaMock);
  });

  it('Deberia obtener y modificar temperatura', () => {
    expect(tablero.temperatura).toBe(temperaturaMock);
    const newTemperaturaMock = mockMostrable(250, 'Nueva Temperatura');
    tablero.temperatura = newTemperaturaMock;
    expect(tablero.temperatura).toBe(newTemperaturaMock);
  });

  it('Deberia actualizar energiaNeta y llamar a mostrarIndicadores', () => {
    const mostrarIndicadoresSpy = jest.spyOn(tablero, 'mostrarIndicadores');
    tablero.actualizarEnergiaNeta(120);
    expect(energiaMock.valor).toBe(120);
    expect(mostrarIndicadoresSpy).toHaveBeenCalled();
  });

  it('Deberia actualizar temperatura y llamar a mostrarIndicadores', () => {
    const mostrarIndicadoresSpy = jest.spyOn(tablero, 'mostrarIndicadores');
    tablero.actualizarTemperatura(300);
    expect(temperaturaMock.valor).toBe(300);
    expect(mostrarIndicadoresSpy).toHaveBeenCalled();
  });

  it('Deberia llamar console.log con los valores correctos en mostrarIndicadores', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    energiaMock.mostrar.mockReturnValue('Energía Neta : 100');
    temperaturaMock.mostrar.mockReturnValue('Temperatura : 200');

    tablero.mostrarIndicadores();

    expect(consoleLogSpy).toHaveBeenCalledWith('Energía Neta : 100');
    expect(consoleLogSpy).toHaveBeenCalledWith('Temperatura : 200');
    
    consoleLogSpy.mockRestore();
  });
});