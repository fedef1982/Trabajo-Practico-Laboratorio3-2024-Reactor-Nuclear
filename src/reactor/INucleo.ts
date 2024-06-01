import BarrasDeControl from "../refrigeracion/barrasDeControl";

export default interface INucleo{
    insertarBarraDeControl(barra : BarrasDeControl);
    obtenerBarraDeControl() : BarrasDeControl;
}