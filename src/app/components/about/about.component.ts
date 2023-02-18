import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  persona: persona = null;
  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    // Lo que almacene en persona se va a guardar en data
    //El subscribe es un método que escucha cuando el Observable hace un cambio y da una respuesta
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
