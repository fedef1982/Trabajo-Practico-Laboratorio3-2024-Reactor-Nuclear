import Operador from "../operador/operador";
import Reactor from "../reactor/reactor";
import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";

export default class CentralConStrategy {
    
    private _reactor : Reactor = undefined as unknown as Reactor;
    private _operadores : Operador[] = [];
    private _strategy : RefrigerableStrategy = undefined as unknown as RefrigerableStrategy;
  

    public set strategy(strategy : RefrigerableStrategy){
        this._strategy = strategy;
    }

    public activarMecanismoDeEnfriamiento(){
        this._strategy.enfriar(this._reactor);
    }

    public agregarOperador(operador : Operador){
        this._operadores.push(operador);
    }

    public quitarOperador(operador : Operador){
        let indexParaEliminar = this._operadores.indexOf(operador);
        if (indexParaEliminar !== -1) {
            this._operadores.splice(indexParaEliminar, 1);
        }
    }

    public encenderReactor(){
        this._reactor.iniciar();
    }

    public apagarReactor(){
        this._reactor.detener();
    }
   
}