import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReservasModule } from './reservas/reservas.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { ClasesComponent } from './clases/clases.component';
import { ClaseDetalleModule } from './clase-detalle/clase-detalle.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReservasManagerComponent } from './reservas-manager/reservas-manager.component'
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { FiltroActividadPipe } from './pipes/filtro-actividad.pipe';
import { RutaIndefinidaComponent } from './ruta-indefinida/ruta-indefinida.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasUsuarioComponent,
    ClasesComponent,
    LoginComponent,
    RegisterComponent,
    MiCuentaComponent,
    NavBarComponent,
    ReservasManagerComponent,
    FiltroActividadPipe,
    RutaIndefinidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReservasModule,
    CalendarModule,
    DropdownModule,
    AppRoutingModule,
    ClaseDetalleModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA3FBFvfGhEvqbdjjWZ3EGsEV8R29QxK9c",
      authDomain: "gym-webapp-63c88.firebaseapp.com",
      projectId: "gym-webapp-63c88",
      storageBucket: "gym-webapp-63c88.appspot.com",
      messagingSenderId: "436460872299",
      appId: "1:436460872299:web:18ba4978aebe6cc5dd872e"
    }),
    ReactiveFormsModule

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
