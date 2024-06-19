import Mostrable from '../src/tablero/mostrable';

export const mockMostrable = (valor: number, descripcion: string): jest.Mocked<Mostrable> => {
  return {
    _valor: valor,
    _descripcion: descripcion,
    get valor() {
      return this._valor;
    },
    set valor(valorNuevo) {
      this._valor = valorNuevo;
    },
    get descripcion() {
      return this._descripcion;
    },
    set descripcion(descripcionNueva) {
      this._descripcion = descripcionNueva;
    },
    mostrar: jest.fn(() => `${descripcion} : ${valor}`)
  } as any;//jest.Mocked<Mostrable>;
};

export default mockMostrable;