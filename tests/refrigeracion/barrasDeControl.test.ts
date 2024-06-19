import BarrasDeControl from "../../src/refrigeracion/barrasDeControl";

describe("BarrasDeControl", () => {
    let instance: BarrasDeControl;
  
    beforeEach(() => {
      instance = new BarrasDeControl(200);
    });
  
    it("Comprobar si el constructor funciona correctamente", () => {
        expect(instance.tiempoVidaUtil).toBe(200);
        expect(instance.porcentajeReduccion).toEqual((200/3600)*100);
    });
    
    it("Comprobar restarVidaUtil", () => {
        const tiempoVidaUtil = instance.tiempoVidaUtil;
        instance['restarVidaUtil']();
        expect (instance.tiempoVidaUtil).toBe(tiempoVidaUtil - 1);
    });
        
    it("Comprobar funcionamiento de actualizarUtilidades", () => {
        let tiempoVidaUtil = instance.tiempoVidaUtil;
        instance['actualizarUtilidad']();
        expect(instance.tiempoVidaUtil).toBe(tiempoVidaUtil-1);
        expect(instance.porcentajeReduccion).toBe(((tiempoVidaUtil-1)/3600)*100);
        expect(instance.tiempoVidaUtil).toBe(tiempoVidaUtil-2);
    });
    it("Comprobar setter TiempoVidaUtil", () => {
        instance.tiempoVidaUtil = 29;
        expect(instance.tiempoVidaUtil).toBe(29);
    });
    
    it("Comprobar setter TiempoVidaUtil", () => {
        instance.tiempoVidaUtil = 29;
        expect(instance.tiempoVidaUtil).toBe(29);
    });
    
    it("Comprobar función porcentajeReduccion", () => {
        expect(instance.porcentajeReduccion).toEqual((200/3600)*100);
    });
    
    it("Comprobar funcionamiento de actualizarUtilidades", () => {
        let tiempoVidaUtil = instance.tiempoVidaUtil;
        instance['actualizarUtilidad']();
        expect(instance.tiempoVidaUtil).toBe(tiempoVidaUtil-1);
        expect(instance.porcentajeReduccion).toBe(((tiempoVidaUtil-1)/3600)*100);
    });
    
    it("Comprobar función restarVidaUtil", () => {
        const tiempoVidaUtil = instance.tiempoVidaUtil;
        instance['restarVidaUtil']();
        expect(instance.tiempoVidaUtil).toBe(tiempoVidaUtil - 1);
    });
  });