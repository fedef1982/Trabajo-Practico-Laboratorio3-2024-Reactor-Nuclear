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
    getTemperaturaNucleo : 100,
    

}as any;

export const mockNucleo = {
    sensor : mockSensor,
    temperatura : 100,
}as any;

export const mockNucleo2 = {
    sensor: {
        getTemperaturaNucleo: 100,
    },
    temperatura: 100,
} as any;

export const mockGenerador = {
    generarEnergia : jest.fn(),
}as any;

export const mockReactor2 = {
    nucleo : mockNucleo2,
    combustible : mockCombustible,
} as any;


export const mockEstadoReactorEncendido = {
    generarEnergia: jest.fn(),
    _reactor : mockReactor2,
} as any;

export const mockReactor = {
    nucleo : mockNucleo,
    combustible : mockCombustible,
    generador : mockGenerador,
    detener : jest.fn().mockReturnValue(undefined),
    estado : mockEstadoReactorEncendido,
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
  
export const mockEstadoReactorCritico = {
    situacionCritica : jest.fn(),
}as any;

export const mockSuscriptorEstadoDisminuido = {
    recibirAlerta : jest.fn(),
} as any;