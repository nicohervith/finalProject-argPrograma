import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component";
import {PortfolioComponent} from './components/portfolio/portfolio.component';
//import { GuardGuard } from "./servicios/guard.guard";

const appRoute: Routes = [
  { path: 'portfolio', component: PortfolioComponent, /*canActivate:[GuardGuard]*/ },
  { path: 'login', component: IniciarSesionComponent },
  {path: '' , redirectTo: 'login', pathMatch:'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
