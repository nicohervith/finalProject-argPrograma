import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
//import { GuardGuard } from "./servicios/guard.guard";

const appRoute: Routes = [
  {
    path: '',
    component: PortfolioComponent /*canActivate:[GuardGuard]*/,
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
