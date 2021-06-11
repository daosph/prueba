import { Injectable } from "@angular/core";
import { HttpClient,HttpResponse } from "@angular/common/http";
import { Persona } from "./Persona.model";

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost8080/Personas-backend-java/webservice/personas';

    cargarPersonas(){
        return this.httpClient.get(this.urlBase);
    }

    agregarPersona(persona: Persona){
        return this.httpClient.post(this.urlBase, persona);
    }
    

    modificarPersona(idPersona: number, persona:Persona){
        let url:string;
        url = this.urlBase + '/' + idPersona;
        this.httpClient.put(url, persona)
        .subscribe(
            (response) =>{
                console.log('resultado de modificar persona: '+ response);
            },
            (error) => console.log('error en modificar persona: ' + error)
        )
    }

    eliminarPersona(idPersona: number){
        let url : string;
        url = this.urlBase + '/' + idPersona;
        this.httpClient.delete(url)
        .subscribe(
            (response) =>{
                console.log('resultado de eliminar persona: '+ response);
            },
            (error) => console.log('error en eliminar persona: ' + error)
        )
    }
    

}