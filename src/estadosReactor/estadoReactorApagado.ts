import EstadoReactor from "./estadoReactor";

export default class EstadoReactorApagado extends EstadoReactor{
    
    public generarEnergia(horasLimite : number): void {
        throw new Error("no genera energia xq esta apagado");
    }
}