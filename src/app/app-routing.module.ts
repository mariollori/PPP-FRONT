import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/presentation/pages/home-page.component';
import { LogInComponent } from './modules/auth/log-in/presentation/pages/log-in.component';
import { RegisterStudentsComponent } from './modules/auth/register-students/presentation/pages/register-students.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: LogInComponent },
  { path: 'register-students', component: RegisterStudentsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
