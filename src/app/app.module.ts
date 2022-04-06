import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReservasModule } from './reservas/reservas.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ClaseDetalleComponent } from './clase-detalle/clase-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaseDetalleComponent
  ],
  imports: [
    BrowserModule,
    ReservasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
