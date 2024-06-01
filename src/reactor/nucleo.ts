import BarrasDeControl from "../refrigeracion/barrasDeControl";
import INucleo from "./INucleo";

export default class Nucleo implements INucleo{
    private _barrasDeControl : BarrasDeControl[];

    constructor(barras? : BarrasDeControl[]){
        this._barrasDeControl = barras ?? [];
    }

    insertarBarraDeControl(barra: BarrasDeControl) {
        this._barrasDeControl.push(barra);
    }

    obtenerBarraDeControl(): BarrasDeControl[] {
        const barra = this._barrasDeControl;
        this._barrasDeControl.splice(0, this._barrasDeControl.length);
        return barra;
    }
}