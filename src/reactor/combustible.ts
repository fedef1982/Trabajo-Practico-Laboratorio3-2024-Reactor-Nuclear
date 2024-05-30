import ICombustible from "./ICombustible";

export default class Combustible implements ICombustible {
    private _cantidadCombustible : number;
    private _porcentajeAumentoTemperatura : number;

    constructor(cantidadCombustible : number, porcentajeAumento : number) {
        this._cantidadCombustible = cantidadCombustible;
        this._porcentajeAumentoTemperatura = porcentajeAumento;
    }

    public set cantidadCombustible(cantCombustible : number) {
        this._cantidadCombustible = cantCombustible;
    }
    public get getCantidadCombustible() : number {
        return this._cantidadCombustible;
    }

    public get porcentajeAumentoTemperatura() : number {
        return this._porcentajeAumentoTemperatura;
    }
}