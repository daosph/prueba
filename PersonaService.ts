import { Injectable } from "@angular/core";
import { DataServices } from "./DataServices";
import { Persona } from "./Persona.model";

@Injectable()
export class PersonaService{

    personas : Persona[] = [];

    constructor(private dataService : DataServices){}

    //para modoficar v arreglo debido a la llamada asincrona
    setPersonas(personas : Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        console.log('persona a agregar: '+ persona.nombre);
        this.dataService.agregarPersona(persona)
        .subscribe(
            (Persona:persona ) =>{
            //Recuperamos el objeto persona con el idPersona agregado 
            console.log('se agrega al array la persona insertada:' + persona.idPersona);
            this.personas.push(persona);
            }
        );
    }

    encontrarPersona(id: number){
        const persona: Persona = this.personas.find(persona => persona.idPersona == id);
        console.log('persona encontrada: ' + persona.idPersona + ' ' + persona.nombre);
        return persona;
    }

    modificarPersona(id: number,persona:Persona){
        console.log('persona a modificar: '+ persona.idPersona);
        this.dataService.modificarPersona(id, persona);
    }

    eliminarPersona(id: number){
        //Encontrar indice en el arreglo
        console.log('eliminar persona con id: '+ id);
        const index = this.personas.findIndex(persona => persona.idPersona == id);
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(id);
    }
}