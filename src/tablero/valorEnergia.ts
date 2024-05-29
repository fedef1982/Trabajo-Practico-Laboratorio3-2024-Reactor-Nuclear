import IMostrable from "./IMostrable";

export default class ValorEnergia implements IMostrable{

    private _descripcion: string;
    private _valor: number;

    constructor (){
        this._descripcion = "Energia Neta Actual en MWe: " 
        this._valor = 0;
    }

    /**
     * getCantidadEnergia Recibe como parametro Sensor
     */
    public getTemperaturaReactor(sensor : Sensor){
        this._valor = this._calcularEnergiaNeta(sensor.temperaturaReactor);

    }
    /**
     * mostrar Implementa mostrar de la interface IMostrable
     */
    public mostrar():string{
        return this._descripcion + this._valor;

    }

    private _calcularEnergiaNeta(temperatura : number): number{
        if (temperatura === 280) return 100;
        return (14 * temperatura) - 3919.97;
    }
}
