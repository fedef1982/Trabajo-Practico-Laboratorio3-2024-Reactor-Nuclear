import BarrasDeControl from "../refrigeracion/barrasDeControl";
import ISensor from "./ISensor";

export default interface INucleo{
    set temperatura(temperatura : number);
    
    get temperatura() : number;

    set sensor(sensor : ISensor);
    
    get sensor() : ISensor;

    insertarBarraDeControl(barra : BarrasDeControl) : any;
    
    sacarBarraDeControl() : void;
}