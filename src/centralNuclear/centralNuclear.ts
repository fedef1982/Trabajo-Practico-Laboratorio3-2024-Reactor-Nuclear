import Operador from "../operador/operador";
import Reactor from "../reactor/reactor";
import Refrigerable from "../refrigeracion/refrigerable";
import Alarma from "../tablero/alarma";
import Tablero from "../tablero/tablero";

export default class CentralNuclear{
    private _reactor : Reactor;
    private _operadores : Operador[];
    private _refrigerantes : Refrigerable[];
    private _cantidadDeBarrasConsumidas : number;
    private _alarma : Alarma;
    private _tablero : Tablero;

    constructor(reactor : Reactor, refrigerantes : Refrigerable[], operadores = Operador[], 
        alarma : Alarma, tablero : Tablero)
    {
        this._reactor = reactor ?? Reactor;
        this._refrigerantes = refrigerantes ?? [];
        this._operadores = operadores ?? [];
        this._alarma = alarma ?? Alarma;
        this._tablero = tablero ?? Tablero;
        this._cantidadDeBarrasConsumidas = 0;
    }

    public agregarRefrigerante(refrigerante : Refrigerable){

        this._refrigerantes.push(refrigerante);
    }

    public quitarRefrigerante(refrigerante : Refrigerable){
        //busco el indice correspondiente al refrigerante que debo eliminar
        let indexParaEliminar = this._refrigerantes.indexOf(refrigerante);
        //si el indice no es negativo (es valido) accedo al if
        if (indexParaEliminar !== -1) {
            //elimino el refrigerante correspondiente a dicho indicice
            this._refrigerantes.splice(indexParaEliminar, 1);
        }

    }

    public agregarOperador(operador : Operador){
        this._operadores.push(operador);
    }

    public quitarOperador(operador : Operador){
        //busco el indice correspondiente al operador que debo eliminar
        let indexParaEliminar = this._operadores.indexOf(operador);
        //si el indice no es negativo (es valido) accedo al if
        if (indexParaEliminar !== -1) {
            //elimino el operador correspondiente a dicho indicice
            this._operadores.splice(indexParaEliminar, 1);
        }
    }

    public encenderReactor(){
        //iniciar debe devolver un bool, en caso de que devuelva false debe lanzar excepcion
        this._reactor.iniciar();
    }

    public apagarReactor(){
        this._reactor.detener();
    }
   
}