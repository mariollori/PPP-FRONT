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

const routesHome: Routes = [
  // { path: '', redirectTo: 'aea', pathMatch: 'full' }, no borrar
  // { path: 'aea', component: HomePageComponent }, no borrar
  // { path: '', component: ListStudentComponent },
  { path: 'settings', component: Settings },
];

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: LogInComponent },
  { path: 'register-students', component: RegisterStudentsComponent },
  {
    path: 'menu-items',
    component: MenuItems,
    canActivate: [authenticationGuard],
    children: routesHome
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
