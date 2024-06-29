import Alerta from "../../src/tablero/alerta";
import Operador from "../../src/operador/operador";
import * as Mocks from "../mocksReactor";
import RefrigerableStrategy from "../../src/refrigeracion/refrigerableStrategy";
import CentralNuclear from "../../src/central/centralNuclear";
import Reactor from "../../src/reactor/reactor";
import EstadoReactorDisminuido from "../../src/estadosReactor/estadoReactorDisminuido";
import EstadoReactor from "../../src/estadosReactor/estadoReactor";


const mockAlerta = {} as any;

describe('Operador', () => {
    let central: CentralNuclear;
    let operador: Operador;
    let strategy: RefrigerableStrategy;
    let reactor: Reactor;
    let estado : EstadoReactorDisminuido;
    beforeEach(() => {
        estado = Mocks.mockEstado;
        reactor = Mocks.mockReactor;
        reactor.estado = estado;
        central = CentralNuclear.getInstance();
        central.reactor = reactor;
        operador = new Operador(1);
        strategy = Mocks.mockStrategy; 
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    
    it('Verificar los getter y setter', () => {
        expect(operador.legajo).toBe(1);
        operador.legajo = 20;
        expect(operador.legajo).toBe(20);
        operador.strategy = strategy;
        expect(operador['_strategy']).toEqual(strategy);
    });
    
    it('Verificar el funcionamiento de recibir alerta', () => {
        operador.strategy = strategy;
        const spy = jest.spyOn(operador, 'activarProtocoloDeEnfriamiento');
        const otherSpy = jest.spyOn(CentralNuclear.getInstance(), 'activarMecanismoDeEnfriamiento');
        operador.recibirAlerta(estado);
        expect(operador['_alerta'].length).toBe(1);
        expect(spy).toHaveBeenCalled();
        expect(otherSpy).toHaveBeenCalled();
    });
});
