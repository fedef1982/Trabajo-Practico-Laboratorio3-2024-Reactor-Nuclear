import { EstadoReactor } from "../enums/estadoReactor";
import IEstadoReactor from "./IEstadoReactor";
import { estadosReactor } from "../constantes";
import ISuscriptorTemperatura from "./ISuscriptorTemperatura";
import TemperaturaFueraDeRangoException from "../excepciones/temperaturaFueraDeRangoException";

export default class EstadoReactorManager implements IEstadoReactor, ISuscriptorTemperatura{
    private _estado : EstadoReactor;

    constructor(){
        this._estado = EstadoReactor.APAGADO;
    }

    public get estado() : EstadoReactor {
        return this._estado;
    }

    public actualizarEstado(temperatura: number): void {

        for (const [rango, estado] of estadosReactor) {
            if (temperatura >= rango[0] && temperatura <= rango[1]) {
                this._estado = estado;
            }
        }
        throw new TemperaturaFueraDeRangoException("Valor fuera de los rangos manejados");
    }
}