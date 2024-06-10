import BarrasDeControl from "../refrigeracion/barrasDeControl";

export default interface INucleo{
    insertarBarraDeControl(barra : BarrasDeControl) : any;
    obtenerBarraDeControl() : BarrasDeControl;

    //------------SE VA-----------
}