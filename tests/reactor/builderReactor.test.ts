import BuilderReactor from "../../src/reactor/builderReactor";
import Reactor from "../../src/reactor/reactor";
import * as MOCKS from "../mocks";

describe('Testea la clase BuilderReactor', () => {
  let builder: BuilderReactor;

  beforeEach(() => {
    builder = new BuilderReactor();
  });

  it('debería establecer la capacidad correctamente', () => {
    const capacidad = 100;
    builder.setCapacidad(capacidad);
    expect((builder as any)._capacidad).toBe(capacidad);
  });

  it('debería establecer el combustible correctamente', () => {
    builder.setCombustible(MOCKS.mockCombustible);
    expect((builder as any)._combustible).toBe(MOCKS.mockCombustible);
  });

  it('debería establecer el núcleo correctamente', () => {
    builder.setNucleo(MOCKS.mockNucleo);
    expect((builder as any)._nucleo).toBe(MOCKS.mockNucleo);
  });

  it('debería establecer el generador correctamente', () => {
    builder.setGenerador(MOCKS.mockGenerador);
    expect((builder as any)._generador).toBe(MOCKS.mockGenerador);
  });

  it('debería crear un Reactor correctamente con los valores establecidos', () => {
    const capacidad = 100;
    builder.setCapacidad(capacidad);
    builder.setCombustible(MOCKS.mockCombustible);
    builder.setNucleo(MOCKS.mockNucleo);
    builder.setGenerador(MOCKS.mockGenerador);

    const reactor = builder.getReactor();

    expect(reactor).toBeInstanceOf(Reactor);
    expect((reactor as any)._capacidad).toBe(capacidad);
    expect((reactor as any)._combustible).toBe(MOCKS.mockCombustible);
    expect((reactor as any)._nucleo).toBe(MOCKS.mockNucleo);
    expect((reactor as any)._generador).toBe(MOCKS.mockGenerador);
  });
});
