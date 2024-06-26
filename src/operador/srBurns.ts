import ISuscriptorEstadoApagado from "../estadosReactor/ISuscriptorEstadoApagado";
import EstadoReactor from "../estadosReactor/estadoReactor";
import Alerta from "../tablero/alerta";

export default class SrBurns implements ISuscriptorEstadoApagado{
    private static instance : SrBurns;
    private _alertas : Alerta[];

    constructor() {
        this._alertas = [];
    }
  
    public static getInstance(): SrBurns {
        if (!SrBurns.instance) {
            SrBurns.instance = new SrBurns();
        }
        return SrBurns.instance;
    }

    public recibirAlerta(estado: EstadoReactor) {
        let alerta = new Alerta();
        alerta.estado = estado;
        this._alertas.push(alerta);
    }
    
}