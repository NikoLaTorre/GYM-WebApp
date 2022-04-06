import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReservasModule } from './reservas/reservas.module';
import { RouterModule, Routes } from '@angular/router';
import { ReservaScreenComponent } from './reservas/screens/reserva-screen/reserva-screen.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'clases', component: ReservaScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
