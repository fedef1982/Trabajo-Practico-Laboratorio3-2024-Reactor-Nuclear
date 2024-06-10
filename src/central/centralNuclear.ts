import Operador from "../operador/operador";
import Reactor from "../reactor/reactor";
import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";
import Alerta from "../tablero/alerta";
import Tablero from "../tablero/tablero";

export default class CentralConStrategy {
    
    private _reactor : Reactor;
    private _operadores : Operador[];
    private _cantidadDeBarrasConsumidas : number;
    private _alarma : Alerta;
    private _tablero : Tablero;
    private _strategy : RefrigerableStrategy;
  

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