export default interface ICombustible {
    set cantidadCombustible(cantCombustible : number);
    get cantidadCombustible() : number;
    get porcentajeAumentoTemperatura() : number;
}