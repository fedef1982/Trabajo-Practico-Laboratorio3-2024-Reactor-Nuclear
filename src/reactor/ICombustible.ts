export default interface ICombustible {
    set cantidadCombustible(cantCombustible : number);
    get getCantidadCombustible() : number;

    get porcentajeAumentoTemperatura() : number;
}