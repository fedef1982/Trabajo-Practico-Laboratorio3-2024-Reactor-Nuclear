import ColeccionTemperaturasVaciasException from "../exceptions/coleccionTemperaturasVaciasException";
import Sensor from "../reactor/sensor";

// 1) 5) y 6)

export default class Tablero{
    private _temperaturas : number[];

    constructor(){
        this._temperaturas = [];
    }

    public mostrarTemperaturaReactor(sensor : Sensor){ //punto 5
        console.log(sensor.temperaturaReactor);
        this._temperaturas.push(sensor.temperaturaReactor);
    }
    
    //muestra la energia neta producida actualmente -> punto  6
    public mostrarEnergiaNeta(sensor : Sensor){
        console.log(this._calcularEnergiaNeta(sensor.temperaturaReactor));
    }
    
    public mostrarCantidadEnergiaNetaProducida(horas : number){
        if(this._temperaturas.length == 0){
            throw new ColeccionTemperaturasVaciasException();
        }
  
        let energiaProducida : number[] = this._temperaturas.map(temp => this._calcularEnergiaNeta(temp));
        
        let promedio = energiaProducida.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / energiaProducida.length;

        console.log(`Energia neta producida por hola : ${promedio * horas}`);
    }

    private _calcularEnergiaNeta(temperatura : number){
        if (temperatura === 280) return 100;

        return (14 * temperatura) - 3919.97;
    }
}