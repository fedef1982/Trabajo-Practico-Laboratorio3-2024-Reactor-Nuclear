import SrBurns from "../../src/operador/srBurns";
import EstadoReactorCritico from "../../src/estadosReactor/estadoReactorCritico";
import * as MOCKS from "../mocks";

describe('Testeo la clase SrBurns', () => {
    let instance : SrBurns;
    let mockEstadoCritico : EstadoReactorCritico;

    beforeEach( () => {
        instance = SrBurns.getInstance();
        mockEstadoCritico = MOCKS.mockEstadoReactorCritico;
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
    

    it('Al llamar a getInstance debería retornar la misma instancia', () => {
        const instance2 = SrBurns.getInstance();
        expect(instance).toBe(instance2);
    });

    it("Al llamar al método recibirAlerta() de SrBurns debe agregar la alerta a su array de alertas.", () => {
        instance.recibirAlerta(mockEstadoCritico);
        expect(instance["_alertas"].length).toBe(1);
    })

});
