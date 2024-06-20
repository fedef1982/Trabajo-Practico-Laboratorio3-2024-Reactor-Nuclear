// Mocking the dependencies

export const mockTurbina = {
    
    porcentajeReduccion : 10,
    activo : true,
    desactivar : jest.fn(),
    activar : jest.fn(),

}as any;

export const mockCombustible = {
    cantidadCombustible : 97,
    porcentajeAumentoTemperatura : jest.fn().mockReturnValue(0.2),
}as any;

export const mockSensor = {
    getTemperaturaNucleo : jest.fn().mockReturnValue(100),
    

}as any;

export const mockNucleo = {
    sensor : mockSensor,
    //temperatura : jest.fn(),
    temperatura : jest.fn().mockReturnValue(100),
}as any;

export const mockNucleo2 = {
    sensor: {
        getTemperaturaNucleo: 100,
    },
    temperatura: 100,
} as any;

export const mockGenerador = {
    
}as any;

export const mockReactor2 = {
    nucleo : mockNucleo2,
    combustible : mockCombustible,
} as any;

export const mockReactor = {
    nucleo : mockNucleo,
    combustible : mockCombustible,
} as any;

export const mockSuscriptor = {
    actualizarTemperatura: jest.fn(),
} as any;

export const mockBuilder = {
    setCapacidad: jest.fn(),
    setCombustible: jest.fn(),
    setNucleo: jest.fn(),
    setGenerador: jest.fn(),
} as any;

export const newBuilder = {
    setCapacidad: jest.fn(),
    setCombustible: jest.fn(),
    setNucleo: jest.fn(),
    setGenerador: jest.fn(),
} as any;

export const mockBarrasDeControl = {
    tiempoVidaUtil: -1,
} as any;

export const mockEstadoReactorEncendido = {
    generarEnergia: jest.fn(),
} as any;
  

