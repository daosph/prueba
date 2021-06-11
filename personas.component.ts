import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../Persona.model';
import { PersonaService } from '../PersonaService';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styles: []
})

export class PersonaComponent implements OnInit{

    personas: Persona[] = [];

    constructor(private personaService: PersonaService,
                private router: Router,
                private route: ActivatedRoute        
        ){}

    ngOnInit(): void {
        this.personaService.obtenerPersonas();
        .suscribe(
            (personasObtenidas: Persona[])=>{
            //cargamos los datos de personas obetenidas
            this.personas = personasObtenidas;
            this.personaService.setPersonas(this.personas);
            console.log('personas obtenidas: ' + this.personas);
            }
        )
        
    }

  
   }
    
}