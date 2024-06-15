import IGenerador from "./iGenerador";

export default class generador implements IGenerador {
    private _energiaProducida : number;

    constructor() {
        this._energiaProducida = 0;
    }

    public generarEnergia(capacidadProductiva: number, temperatura: number): number {
        let energiaProducida = ((this._calcularEnergiaNeta(temperatura)) / 100 ) * capacidadProductiva;
        this._energiaProducida = energiaProducida;
        return energiaProducida;
    }

    public get energiaProducida() : number {
        return this._energiaProducida;
    }

    private _calcularEnergiaNeta(temperatura : number): number{
        if(temperatura < 280) return 0;
        if (temperatura >= 280 && temperatura < 287.141 ) return 100;
        return parseFloat(((14 * temperatura) - 3919.97).toFixed(2));
    }
}
