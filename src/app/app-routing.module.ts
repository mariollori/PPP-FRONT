import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/presentation/pages/home-page.component';
import { LogInComponent } from './modules/auth/log-in/presentation/pages/log-in.component';
import { RegisterStudentsComponent } from './modules/auth/register-students/presentation/pages/register-students.component';
import { LoadingPageComponent } from './shared/components/loading/loading-page.component';
import { authenticationGuard } from './config/guard/authentication.guard';
import { DashboardComponent } from './modules/dashboard/presentation/pages/dashboard/dashboard.component';
import { ListStudentComponent } from './modules/list-student/presentation/pages/list-student.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: LogInComponent },
  { path: 'register-students', component: RegisterStudentsComponent },
  { path: 'dashboard', component: DashboardComponent, 
  // canActivate: [authenticationGuard] 
},
  { path: 'loading', component: LoadingPageComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
