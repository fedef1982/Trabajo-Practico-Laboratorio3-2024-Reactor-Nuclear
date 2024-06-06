export enum EstadoReactor{
    APAGADO,    // No informa temperatura
    ENCENDIDO,  // Temperatura menor a 280 °C
    NORMAL,     // Tempertatura entre [280, 330]°C 100% capacidad de generacion de energia
    DISMINUIDO, // Tempertatura entre (330, 400]°C 80% capacidad de generacion de energia
    CRITICO     // Tempertatura más de 400°C  Debe ser apagado 
}