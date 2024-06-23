import IGenerador from "./IGenerador";
import ISuscriptorEnergiaNeta from "./ISuscriptorEnegiaNeta";

export default class Generador implements IGenerador{
    private _energiaNeta: number;
    private _suscriptoresEnergiaNeta: ISuscriptorEnergiaNeta[] = [];

    constructor() {
        this._energiaNeta = 0;
    }

    public get energiaNeta(): number {
        return this._energiaNeta;
    }

    public get suscriptoresEnergiaNeta():ISuscriptorEnergiaNeta[] {
        return this._suscriptoresEnergiaNeta;
    }

    public generarEnergia(porcentajeCapacidadProductiva: number, temperacturaNucleoRactor: number):number{
        this._energiaNeta = this._calcularEnergiaNeta(temperacturaNucleoRactor) * (porcentajeCapacidadProductiva /100);
        this.notificarEnergiaNeta();
        return this._energiaNeta;
    }

    private _calcularEnergiaNeta(temperacturaNucleoRactor: number): number{
        if(temperacturaNucleoRactor < 280) return 0;
        if (temperacturaNucleoRactor >= 280.0 && temperacturaNucleoRactor < 287.141 ) return 100;
        return parseFloat(((14 * temperacturaNucleoRactor) - 3919.97).toFixed(2));
    }

    public suscribir(suscriptor: ISuscriptorEnergiaNeta):void{
        this._suscriptoresEnergiaNeta.push(suscriptor);
    }

    public desuscribir(suscriptor: ISuscriptorEnergiaNeta):void{
        const indice = this._suscriptoresEnergiaNeta.indexOf(suscriptor);
        if (indice >= 0) {
          this._suscriptoresEnergiaNeta.splice(indice, 1);
        }    
    }

    public notificarEnergiaNeta():void{
        for (const suscriptor of this._suscriptoresEnergiaNeta) {
            suscriptor.actualizarEnergiaNeta(this._energiaNeta);
        }
    }
}