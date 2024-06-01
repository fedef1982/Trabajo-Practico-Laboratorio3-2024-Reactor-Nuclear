export default class excepcionTemperaturaCriticaReactor extends Error {

    constructor(message: string) {
        super(message); 
        this.name = "TemperatuCriticaReactor"; 
    }
}