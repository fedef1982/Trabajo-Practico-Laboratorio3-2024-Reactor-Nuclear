import IGenerador from "./IGenerador";
import ISuscriptorEmergiaNeta from "./ISuscriptorEnegiaNeta";

export default class Generador implements IGenerador{
    private _energiaNeta: number;
    private _suscriptoresEnergiaNeta: ISuscriptorEmergiaNeta [] = [];

    constructor(estadoInicial: number) {
        this._energiaNeta = 0;
    }

    public get energiaNeta(): number {
        return this._energiaNeta;
    }

    public generarEnergia(porcentajeCapacidadProductiva: number, temperacturaNucleoRactor: number):void{
        this._energiaNeta = this._calcularEnergiaNeta(temperacturaNucleoRactor) * porcentajeCapacidadProductiva /100;
        this.notificarEnerfgiaNeta();
    }

    private _calcularEnergiaNeta(temperacturaNucleoRactor: number): number{
        if (temperacturaNucleoRactor > 280.0 && temperacturaNucleoRactor < 287.141 ) 
            {
                return 100;
            }
        return (14 * temperacturaNucleoRactor) - 3919.97;
    }

    private suscribir(suscriptor: ISuscriptorEmergiaNeta):void{
        this._suscriptoresEnergiaNeta.push(suscriptor);
    }

    private desuscribir(suscriptor: ISuscriptorEmergiaNeta):void{
        const indice = this._suscriptoresEnergiaNeta.indexOf(suscriptor);
        if (indice >= 0) {
          this._suscriptoresEnergiaNeta.splice(indice, 1);
        }    
    }


    private notificarEnerfgiaNeta():void{
        for (const suscriptor of this._suscriptoresEnergiaNeta) {
            suscriptor.actualizarEnergiaNeta(this._energiaNeta);
        }
    }
}