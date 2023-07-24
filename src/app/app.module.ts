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
import { Sidebar } from './shared/components/sidebar/sidebar.component';
import { ButtonStandAlone } from './shared/components/button/button-shared.standalone';
import { LoadingPageComponent } from './shared/components/loading/loading-page.component';
import { CircleAvatarComponent } from './shared/components/circle-avatar/circle-avatar.component';
import { InputTextMedium } from './shared/components/input-text-medium/input-text-medium';
import { Providers } from './shared/utils/providers.utils';

// PROVIDERS

// BOOTSTRAP

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    RegisterStudentsComponent,
    Sidebar,
    LoadingPageComponent,
    CircleAvatarComponent,
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
  ],
  providers: Providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
