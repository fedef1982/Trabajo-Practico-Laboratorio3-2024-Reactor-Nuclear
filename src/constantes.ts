import { EstadoReactor } from "./enums/estadoReactor";

export const estadosReactor : Map<[number, number], EstadoReactor> = new Map();
estadosReactor.set([0, 279], EstadoReactor.ENCENDIDO);
estadosReactor.set([280, 330], EstadoReactor.NORMAL);
estadosReactor.set([331, 400], EstadoReactor.DISMINUIDO);
estadosReactor.set([401, Infinity], EstadoReactor.CRITICO);

export  const CAPACIDAD_MAX_REACTOR = 700;
export  const CANTIDAD_COMBUSTIBLE_INICIAL = 100;
export  const PORCENTAJE_AUMENTO_TEMPERATURA_REACTOR = 0.2;