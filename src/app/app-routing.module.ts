import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/presentation/pages/home-page.component';
import { LogInComponent } from './modules/auth/log-in/presentation/pages/log-in.component';
import { RegisterStudentsComponent } from './modules/auth/register-students/presentation/pages/register-students.component';
import { Sidebar } from './shared/components/sidebar/sidebar.component';
import { LoadingPageComponent } from './shared/components/loading/loading-page.component';
import { LogInService } from './modules/auth/log-in/domain/services/log-in.service';
import { authenticationGuard } from './config/guard/authentication.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: LogInComponent },
  { path: 'register-students', component: RegisterStudentsComponent },
  { path: 'sidebar', component: Sidebar, canActivate: [authenticationGuard] },
  { path: 'loading', component: LoadingPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
