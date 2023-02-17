import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
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
  {
    path: 'nuevaexp',
    component: NewExperienciaComponent,
  },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaeducacion', component: NewEducacionComponent },
  {path : 'editeducacion/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
