import Persona from "./Persona.js";

export default class Jugador extends Persona{
    constructor(id,nombre,apellido,edad,sexo,posicion,salario,pieDominante){
        super(id,nombre,apellido,edad,sexo);
        this.posicion = posicion;
        this.salario = salario;
        this.pieDominante = pieDominante;
    }
}