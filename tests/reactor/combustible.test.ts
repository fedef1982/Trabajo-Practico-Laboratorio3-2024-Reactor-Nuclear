import Combustible from "../../src/reactor/combustible";

describe('Testea la clase Combustible', () => {
  let combustible: Combustible;

  beforeEach(() => {
    combustible = new Combustible(100, 10);
  });

  it('debería inicializarse con la cantidad de combustible correcta', () => {
    expect(combustible.cantidadCombustible).toBe(100);
  });

  it('debería inicializarse con el porcentaje de aumento de temperatura correcto', () => {
    expect(combustible.porcentajeAumentoTemperatura).toBe(10);
  });

  it('debería permitir cambiar la cantidad de combustible', () => {
    combustible.cantidadCombustible = 200;
    expect(combustible.cantidadCombustible).toBe(200);
  });
});
