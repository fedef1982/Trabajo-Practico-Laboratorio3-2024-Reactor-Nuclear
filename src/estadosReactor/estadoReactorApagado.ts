import NoSeGeneraEnergiaException from "../excepciones/noSeGeneraEnergiaException";
import EstadoReactor from "./estadoReactor";

export default class EstadoReactorApagado extends EstadoReactor{
    
    public generarEnergia(horasLimite : number): void {
        throw new NoSeGeneraEnergiaException("No se genera energía porque el reactor se encuentra apagado.");
    }
}