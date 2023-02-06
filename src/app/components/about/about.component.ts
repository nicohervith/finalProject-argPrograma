import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  persona: persona = new persona('', ' ', '');
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    // Lo que almacene en persona se va a guardar en data
    //El subscribe es un método que escucha cuando el Observable hace un cambio y da una respuesta
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
