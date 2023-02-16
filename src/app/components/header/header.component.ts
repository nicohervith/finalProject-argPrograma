import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    /* this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log('Datos personales ' + JSON.stringify(data));
      this.miPortfolio = data[0];
    }); */
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/login']);
  }
}
