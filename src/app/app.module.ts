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
import { MenuItems } from './modules/menu-items/presentation/pages/menu-items.component';
import { Settings } from './modules/settings/presentation/pages/settings.component';
import { InputTextBasic } from './shared/components/input-text-basic/input-text-basic';
import { GestionDePracticas } from './modules/coordinador/gestion-de-practicas/presentation/pages/gestion-de-practicas.component';
import { BodyGestionDePracticas } from './modules/coordinador/gestion-de-practicas/presentation/components/body/body-gestion-de-practicas.component';
import { GlobalModel } from './shared/components/modal/global-modal';
import { ConfigPracticanteModal } from './modules/coordinador/gestion-de-practicas/presentation/components/content-modal/config-practicante/config-practicante';
import { ConfigSupervisorMoldal } from './modules/coordinador/gestion-de-practicas/presentation/components/content-modal/config-supervisor/config-supervisor';
import { CreateNewPlanModal } from './modules/coordinador/gestion-de-practicas/presentation/components/content-modal/create-new-plan/create-new-plan';
import { GlobasToast } from './shared/components/toast/globas-toast';
import { GlobalBgAlerts } from './shared/components/bg-alerts/global-bg-alerts';
import { ListStudentComponent } from './modules/coordinador/lista-de-estudiantes/list-student/presentation/pages/list-student.component';
import {
  FirstStepRegister,
  SecondStepRegister,
} from './modules/registrar-practicante/presentation/pages';
import { ControlPractice } from './modules/practicante/control-practice/presentation/pages/control-practice.component';
import { BodyControlPractice } from './modules/practicante/control-practice/presentation/components/body/body-control-practice.component';
import { PrincipalHomeComponent } from './modules/practicante/principal-home/presentation/pages/principal-home';
import { PrincipalHomeBody } from './modules/practicante/principal-home/presentation/components/body/body-principal-home';
import { GentionInfoEmpresaModule } from './modules/practicante/principal-home/presentation/components/content-body/gestion-informacion-empresa/gestion-informacion-empresa';

// PROVIDERS

// BOOTSTRAP

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    RegisterStudentsComponent,
    Settings,
    GestionDePracticas,
    MenuItems,
    FirstStepRegister,
    SecondStepRegister,
    ControlPractice,
    PrincipalHomeComponent,
  ],
  imports: [
    LoadingPageComponent,
    ListStudentComponent,
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
    BodyGestionDePracticas,
    GlobalModel,
    ConfigPracticanteModal,
    ConfigSupervisorMoldal,
    CreateNewPlanModal,
    GlobasToast,
    GlobalBgAlerts,
    BodyControlPractice,
    PrincipalHomeBody,
    GentionInfoEmpresaModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: Providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
