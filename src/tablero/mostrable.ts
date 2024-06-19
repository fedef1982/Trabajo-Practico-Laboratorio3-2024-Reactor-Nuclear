export default class Mostrable{
    private _valor: number;
    private _descripcion: string;

    constructor (valor: number,descripcion: string){
        this._valor = valor;
        this._descripcion = descripcion;
    }

    public get valor(): number{
        return this._valor;
    }
    public get descripcion(): string{
        return this._descripcion;
    }

    public set valor(val: number){
        this._valor = val;
    }
    public set descripcion(descrip: string){
        this._descripcion = descrip;
    }

    public mostrar():string{
      return this._descripcion + " : " + this.valor;
    }
}