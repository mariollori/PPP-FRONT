// DECLARATIONS
import { AppComponent } from './app.component';

// IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './modules/home/presentation/pages/home-page.component';
import { LogInComponent } from './modules/auth/log-in/presentation/pages/log-in.component';
import { RegisterStudentsComponent } from './modules/auth/register-students/presentation/pages/register-students.component';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { ButtonStandAlone } from './shared/components/button/button-shared.standalone';
import { LoadingPageComponent } from './shared/components/loading/loading-page.component';
import { CircleAvatarComponent } from './shared/components/circle-avatar/circle-avatar.component';
import { InputTextMedium } from './shared/components/input-text-medium/input-text-medium';
import { Providers } from './shared/utils/providers.utils';
import { DashboardComponent } from './modules/dashboard/presentation/pages/dashboard/dashboard.component';
import { UserBar } from './shared/components/userbar/userbar';
import { ScreenPageComponent } from './shared/components/screen/screen-page';

// PROVIDERS

// BOOTSTRAP

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    RegisterStudentsComponent,
    LoadingPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonStandAlone,
    InputTextMedium,
    CircleAvatarComponent,
    Sidebar,
    UserBar,
    ScreenPageComponent,
  ],
  providers: Providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
