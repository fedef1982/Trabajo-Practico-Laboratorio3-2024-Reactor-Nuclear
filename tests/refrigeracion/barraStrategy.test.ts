import Nucleo from "../../src/reactor/nucleo";
import Reactor from "../../src/reactor/reactor";
import BarrasStrategy from "../../src/refrigeracion/barraStrategy";
import BarrasDeControl from "../../src/refrigeracion/barrasDeControl";
import Combustible from "../../src/reactor/combustible";
import Sensor from "../../src/reactor/sensor";
import EstadoReactorDisminuido from "../../src/estadosReactor/estadoReactorDisminuido";
import EstadoReactorNormal from "../../src/estadosReactor/estadoReactorNormal";
import { mockGenerador } from "../mocks";

describe("BarraStrategy", () => {
    let barrasStrategy: BarrasStrategy;
    let barras : BarrasDeControl[];
    let reactor : Reactor;
    let nucleo : Nucleo;
    let combustible : Combustible;
    let sensor : Sensor;

    beforeEach(() => {
      barras = [
        new BarrasDeControl(0),
        new BarrasDeControl(10),
        new BarrasDeControl(10),
        new BarrasDeControl(0),
        new BarrasDeControl(29),
        new BarrasDeControl(0)
      ];
      combustible = new Combustible(10, 10);
      sensor = new Sensor();
      nucleo = new Nucleo();
      nucleo.temperatura = 390;
      sensor.temperaturaNucleo;
      barrasStrategy = new BarrasStrategy(barras);
      reactor = new Reactor(10, combustible, nucleo,mockGenerador);
      reactor.estado = new EstadoReactorDisminuido();
    });
  
    it("Prueba sobre la cantidad de barras", () => {
      expect(barrasStrategy.barras.length).toBe(6);
    });


    it("Verificar la limpieza de barras que tienen vida util 0", () => {
      barrasStrategy.limpiarBarraInutiles();
      expect(barrasStrategy.barras.length).toBe(3);
    });


    it("Verificar el funcionamiento de esUtil siendo que debe dar false cuando el tiempo de vida util es 0", () =>{
      let barra = barrasStrategy.barras[0];
      //['esUtil'](barra); permite acceder a un metodo private de la clase BarraDeControl
      let utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeFalsy();

      barra = barrasStrategy.barras[1];
      utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeTruthy();
      
      barra = barrasStrategy.barras[2];
      utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeTruthy();

      barra = barrasStrategy.barras[3];
      utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeFalsy();

      barra = barrasStrategy.barras[4];
      utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeTruthy();

      barra = barrasStrategy.barras[5];
      utilizable = barrasStrategy['esUtil'](barra);
      expect(utilizable).toBeFalsy();
    });


    it("debería disminuir la temperatura correctamente con un porcentaje de reducción válido", () => {
      const temperaturaInicial : number = reactor.nucleo.temperatura;

      barrasStrategy.disminuirTemperatura(barras[1].porcentajeReduccion, reactor);

      //compruebo que mi temperatura bajo en comparacion a la temperatura inicial
      expect(reactor.nucleo.temperatura).toBeLessThan(temperaturaInicial);
    });


    it("no debería disminuir la temperatura porque mi barra tiene tiempo de vida util 0", () => {
      const temperaturaInicial : number = reactor.nucleo.temperatura;

      barrasStrategy.disminuirTemperatura(barras[0].porcentajeReduccion, reactor);

      expect(reactor.nucleo.temperatura).toBe(temperaturaInicial);
    });


    it("Verificar si funciona correctamente restablecerBarrasUsadas", () =>{
      let otrasBarras : BarrasDeControl[] = [
        new BarrasDeControl(10),
        new BarrasDeControl(10),
        new BarrasDeControl(10),
        new BarrasDeControl(200),
        new BarrasDeControl(200),
        new BarrasDeControl(200)
      ];

      let strategy : BarrasStrategy = new BarrasStrategy(otrasBarras);

      strategy.enfriar(reactor);
      //reactor esta en disminuido pasa a normal
      expect(reactor.estado).toBeInstanceOf(EstadoReactorNormal);
      expect(strategy.barrasUsadas).toBe(3);
      strategy['restablecerBarrasUsadas']();
      expect(strategy.barrasUsadas).toBe(0);
    })
  

    it("Comprobar que el enfriamiento fracaso y se produzca un error", () => {
      expect(() => {
          barrasStrategy.enfriar(reactor);
      }).toThrow(Error);
    });


    it("Verificar el correcto funcionamiento de los metodos para agregar y quitar barras de la estrategia", () =>{
      const barra : BarrasDeControl = new BarrasDeControl(20);
      barrasStrategy.agregarBarra(barra);
      expect(barrasStrategy.barras.length).toBe(7);
      barrasStrategy.quitarBarra(barra);
      expect(barrasStrategy.barras.length).toBe(6);
    })
    
  });