import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReservasModule } from './reservas/reservas.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReservasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
