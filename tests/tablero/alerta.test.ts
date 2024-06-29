import Alerta from "../../src/tablero/alerta";

describe("Alerta", () => {
    let instance: Alerta;
  
    const mockEstadoReactor = {} as any;
    beforeEach(() => {
      instance = new Alerta();
    });
  
    it("Se verifica el funcionamiento del getter y setter", () => {
        instance.estado = mockEstadoReactor;
        expect(instance.estado).toBe(mockEstadoReactor);
        let estado = instance.estado;
        expect(estado).toBe(mockEstadoReactor);
    });
  });