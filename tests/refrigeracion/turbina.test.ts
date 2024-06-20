import Turbina from "../../src/refrigeracion/turbina";

describe("Turbina", () => {

    let instance: Turbina;
  
    beforeEach(() => {
        instance = new Turbina(10);
    });
  
    it("Comprobar si se activa la turbina y get activo", () => {
        instance.activar();
        expect(instance.activo).toBeTruthy();
    });
    
    it("Comprobar si se desactiva la turbina", () => {
        instance.activar();
        instance.desactivar();
        expect(instance.activo).toBeFalsy();
    });

    it("Comprobar get porcentajeDeReduccion", () => {
        expect(instance.porcentajeReduccion).toBe(10);
    });
    

  });