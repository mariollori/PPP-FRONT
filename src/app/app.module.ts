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
import { UserBar } from './shared/components/userbar/userbar';
import { ScreenPageComponent } from './shared/components/screen/screen-page';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { ListStudentComponent } from './modules/list-student/presentation/pages/list-student.component';
import { MenuItems } from './modules/menu-items/presentation/pages/menu-items.component';
import { Settings } from './modules/settings/presentation/pages/settings.component';
import { InputTextBasic } from './shared/components/input-text-basic/input-text-basic';

// PROVIDERS

// BOOTSTRAP

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    RegisterStudentsComponent,
    LoadingPageComponent,
    Settings,
    MenuItems,
    ListStudentComponent,
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
    InputTextBasic,
    CircleAvatarComponent,
    Sidebar,
    UserBar,
    ScreenPageComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: Providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
