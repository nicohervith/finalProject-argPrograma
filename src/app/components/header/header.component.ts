import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private datosPortfolio:PortfolioService, private router:Router) {}

  ngOnInit(): void {


  /* this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log('Datos personales ' + JSON.stringify(data));
      this.miPortfolio = data[0];
    }); */
  }

  login(){
    this.router.navigate(['/login'])
  }
}
