import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservaScreenComponent } from './reservas/screens/reserva-screen/reserva-screen.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { ClasesComponent } from './clases/clases.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'horario', component: ReservaScreenComponent},
  {path:'clases', component: ClasesComponent},
  {path:'reservas', component: ReservasUsuarioComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'cuenta', component: MiCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
