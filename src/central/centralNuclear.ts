import Operador from "../operador/operador";
import Reactor from "../reactor/reactor";
import RefrigerableStrategy from "../refrigeracion/refrigerableStrategy";
import Tablero from "../tablero/tablero";

export default class CentralNuclear {
    private static _instance : CentralNuclear;
    private _reactor : Reactor = undefined as unknown as Reactor;
    private _operadores : Operador[] = [];
    private _strategy : RefrigerableStrategy = undefined as unknown as RefrigerableStrategy;
    private _tablero : Tablero = undefined as unknown as Tablero;
  
    
    constructor(){}

    public static getInstance(){
        if(!this._instance){
            this._instance = new CentralNuclear();
        }
        return this._instance;
    }

    public set reactor(reactor : Reactor){
        this._reactor = reactor;
    }

    public get reactor() : Reactor{
        return this._reactor;
    }

    public set tablero(tablero : Tablero) {
        this._tablero = tablero;
    }
    
    public get tablero() : Tablero {
        return this._tablero;
    }

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