import Tablero from "./tablero";

export default class TableroConsola extends Tablero{
    public mostrarIndicadores(){
        console.log(this._energiaNeta.mostrar());
        console.log(this._temperatura.mostrar());
    }
}