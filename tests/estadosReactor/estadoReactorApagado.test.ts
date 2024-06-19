import EstadoReactorApagado from "../../src/estadosReactor/estadoReactorApagado";

describe("testea la clase EstadoReactorApagado", () => {
    let instance : EstadoReactorApagado;

    beforeEach(() => {
        instance = new EstadoReactorApagado();
    });


    describe('Testea el método generarEnergia()', () => {

        it('Debería arrojar un error cuando se llama a generarEnergia', () => {

            expect(() => instance.generarEnergia(1)).toThrow(Error);
        });
    });

})