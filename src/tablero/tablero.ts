import ISuscriptorTemperatura from "../reactor/ISuscriptorTemperatura";
import ISuscriptorEnergiaNeta from "../reactor/generador/ISuscriptorEnegiaNeta";
import Mostrable from "./mostrable";

export default abstract class Tablero implements ISuscriptorEnergiaNeta, ISuscriptorTemperatura{
    protected _energiaNeta: Mostrable;
    protected _temperatura: Mostrable;

    constructor(energia: Mostrable, temperatura: Mostrable){
        this._energiaNeta = energia;
        this._temperatura = temperatura;
    }

    public get energiaNeta(): Mostrable{return this._energiaNeta;}
    public get temperatura(): Mostrable{return this._temperatura;}
    public set energiaNeta(mostrable: Mostrable){this._energiaNeta = mostrable;}
    public set temperatura(mostrable: Mostrable){this._temperatura = mostrable;}

    public actualizarEnergiaNeta(energiaNeta: number): void {
        this._energiaNeta.valor = energiaNeta;
        this.mostrarIndicadores();
    }

    public actualizarTemperatura(temperatura: number): void {
        this._temperatura.valor = temperatura;
        this.mostrarIndicadores();
    }
    abstract mostrarIndicadores():void;
}