import Alerta from "../../src/tablero/alerta";

import EstadoReactor from "../../src/estadosReactor/estadoReactor";
import EstadoReactorDisminuido from "../../src/estadosReactor/estadoReactorDisminuido";

describe('Alerta', () => {
  let alerta: Alerta;
  let estado: EstadoReactor;

  beforeEach(() => {
    alerta = new Alerta();
    estado = new EstadoReactorDisminuido();
  });

  it('debería establecer y obtener el estado correctamente', () => {
    alerta.estado = estado;
    expect(alerta.estado).toBe(estado);
  });
  
});