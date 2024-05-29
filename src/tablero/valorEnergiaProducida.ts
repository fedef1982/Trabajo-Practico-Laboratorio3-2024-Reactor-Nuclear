import IMostrable from "./IMostrable";

export default class valorEnergiaProcucida implements IMostrable{

    private _descripcion: string;
    private _valor: number;
    private _horas: number;
    private _temperaturas: number[];

    constructor (horas: number, temperaturas: number[]){
        this._descripcion = "Temperartura de Reactor en °C en ultimas "+ horas +" : ";
        this._valor = 0;
        this._horas = horas;
        this._temperaturas = temperaturas;
    }

    /**
     * getCantidadEnergiaN Recibe como parametro Sensor
     */
    public getCantidadEnergiaNetaProducida(){
        let promedio = this._temperaturas.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this._temperaturas.length;
        this._valor = this._calcularEnergiaNeta(promedio);
    }

    private _calcularEnergiaNeta(temperatura : number): number{
        if (temperatura === 280) return 100;
        return (14 * temperatura) - 3919.97;
    }
    
    /**
     * mostrar Implementa mostrar de la interface IMostrable
     */
    public mostrar():string{
        return this._descripcion + this._valor * this._horas;

    }

}