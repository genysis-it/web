import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechnologyComponent } from './technology/technology.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { LetsconnectComponent } from './letsconnect/letsconnect.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BadPasswordComponent } from './bad-password/bad-password.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    TechnologyComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ServicesComponent,
    CustomersComponent,
    LetsconnectComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BadPasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'technology', component: TechnologyComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'letsconnect', component: LetsconnectComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'forgotPassword', component: ForgotPasswordComponent},
      {path: 'badPassword', component:BadPasswordComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
