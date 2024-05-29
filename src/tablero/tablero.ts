import IMostrable from "./IMostrable";
import ValorEnergia from "./valorEnergia";
import valorEnergiaProcucida from "./valorEnergiaProducida";
import ValorTemperatura from "./valorTemperatura";

export default abstract class Tablero{
    private _indicadores : IMostrable[];
    private _temperaturas : number[];

    constructor(){
        this._indicadores = [];
        this._temperaturas = [];
    }
    
    public actualizarIndicadores(sensor: Sensor){
        this._indicadores = [];
        let indicador: IMostrable;
        indicador = new ValorTemperatura(); 
        this._temperaturas.push(sensor.temperatura);
        this._indicadores.push(indicador);
        indicador = new ValorEnergia(); 
        this._indicadores.push(indicador);
        indicador = new valorEnergiaProcucida(this._temperaturas.length,this._temperaturas); 
        this._indicadores.push(indicador);
        this.mostrarIndicadores();
    }

    public agregarAlarma (alarma: IMostrable){
        this._indicadores.push(alarma);
        this.mostrarIndicadores();
    }

    abstract mostrarIndicadores():void;
}