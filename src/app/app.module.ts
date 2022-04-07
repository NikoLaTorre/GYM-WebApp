import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReservasModule } from './reservas/reservas.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ClaseDetalleComponent } from './clase-detalle/clase-detalle.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { ClasesComponent } from './clases/clases.component';
import { ClaseDetalleModule } from './clase-detalle/clase-detalle.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasUsuarioComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    ReservasModule,
    AppRoutingModule,
    ClaseDetalleModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
