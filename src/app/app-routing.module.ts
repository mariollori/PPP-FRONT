import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/presentation/pages/home-page.component';
import { LogInComponent } from './modules/auth/log-in/presentation/pages/log-in.component';
import { RegisterStudentsComponent } from './modules/auth/register-students/presentation/pages/register-students.component';
import { LoadingPageComponent } from './shared/components/loading/loading-page.component';
import { authenticationGuard } from './config/guard/authentication.guard';

import { ListStudentComponent } from './modules/list-student/presentation/pages/list-student.component';
import { MenuItems } from './modules/menu-items/presentation/pages/menu-items.component';
import { Settings } from './modules/settings/presentation/pages/settings.component';
import { GestionDePracticas } from './modules/coordinador/gestion-de-practicas/presentation/pages/gestion-de-practicas.component';

const routesHome: Routes = [
  { path: '', redirectTo: 'configuracion-de-cuenta', pathMatch: 'full' },

  //Comite
  { path: 'gestion-de-practicantes', component: GestionDePracticas },
  { path: 'lista-de-estudiantes-en-espera', component: Settings },
  { path: 'listas-de-estudiantes', component: Settings },

  //Supervisor
  { path: 'lista-estudiantes', component: Settings },

  // Practicante
  { path: 'home', component: Settings },
  { path: 'control-de-practicas-pre-profesionales', component: Settings },

  // PARA TODOS LOS ROLES
  { path: 'configuracion-de-cuenta', component: Settings },
];

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: LogInComponent },
  { path: 'register-students', component: RegisterStudentsComponent },
  {
    path: 'menu-items',
    component: MenuItems,
    canActivate: [authenticationGuard],
    children: routesHome,
  },
  // { path: 'list-student', component: ListStudentComponent },
  { path: 'loading', component: LoadingPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
