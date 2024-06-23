import Mostrable from '../../src/tablero/mostrable';

describe('Mostrable', () => {
  let mostrable: Mostrable;

  beforeEach(() => {
    mostrable = new Mostrable(10, 'Prueba Descripcion');
  });

  it('Debria ser una instancia de Mostrable', () => {
    expect(mostrable).toBeInstanceOf(Mostrable);
  });

  it('Deberia tener los valores iniciales y obtenerlos', () => {
    expect(mostrable.valor).toBe(10);
    expect(mostrable.descripcion).toBe('Prueba Descripcion');
  });

  it('Deberia modificar los valores ', () => {
    mostrable.valor = 20;
    mostrable.descripcion = 'Nueva Descripcion';

    expect(mostrable.valor).toBe(20);
    expect(mostrable.descripcion).toBe('Nueva Descripcion');
  });

  it('Deber mostrar string de salida', () => {
    expect(mostrable.mostrar()).toBe('Prueba Descripcion : 10');

    mostrable.valor = 20;
    mostrable.descripcion = 'Nueva Descripcion';

    expect(mostrable.mostrar()).toBe('Nueva Descripcion : 20');
  });
});