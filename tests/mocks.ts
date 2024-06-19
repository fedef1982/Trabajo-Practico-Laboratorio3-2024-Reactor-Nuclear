// Mocking the dependencies
export const mockCombustible = {
    cantidadCombustible : 97,
    porcentajeAumentoTemperatura : jest.fn().mockReturnValue(0.2),
}as any;

export const mockSensor = {
    getTemperaturaReactor : jest.fn().mockResolvedValue(100),
}as any;

export const mockNucleo = {
    sensor : mockSensor,
}as any;

export const mockGenerador = {
    
}as any;


export const mockReactor = {
    nucleo : mockNucleo,
    combustible : mockCombustible,
} as any;

export const mockSuscriptor = {
    actualizarTemperatura: jest.fn(),
} as any;