import DirectorReactor from "../../src/reactor/directorReactor";
import IBuilderReactor from "../../src/reactor/IBuilderReactor";
import Combustible from "../../src/reactor/combustible";
import Nucleo from "../../src/reactor/nucleo";
import Generador from "../../src/reactor/generador/Generador";
import {CAPACIDAD_MAX_REACTOR} from "../../src/constantes";
import * as MOCKS from "../mocks";

describe('Testea la clase DirectorReactor', () => {
  let mockBuilder: IBuilderReactor;
  let newMockBuilder : IBuilderReactor;
  let instance: DirectorReactor;

  beforeEach(() => {
    mockBuilder = MOCKS.mockBuilder;
    instance = new DirectorReactor(mockBuilder);
    newMockBuilder = MOCKS.newBuilder;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería cambiar el builder', () => {

    instance.cambiarBuilder(newMockBuilder);
    (instance as any)._builder.setCapacidad(100);
    expect(newMockBuilder.setCapacidad).toHaveBeenCalledWith(100);
  });

  it('debería crear un reactor correctamente', () => {
    instance.crearReactor();

    expect(mockBuilder.setCapacidad).toHaveBeenCalledWith(CAPACIDAD_MAX_REACTOR);
    expect(mockBuilder.setCombustible).toHaveBeenCalledWith(expect.any(Combustible));
    expect(mockBuilder.setNucleo).toHaveBeenCalledWith(expect.any(Nucleo));
    expect(mockBuilder.setGenerador).toHaveBeenCalledWith(expect.any(Generador));

  });
});
