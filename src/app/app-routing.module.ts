import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservaScreenComponent } from './reservas/screens/reserva-screen/reserva-screen.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { ClasesComponent } from './clases/clases.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReservasManagerComponent } from './reservas-manager/reservas-manager.component';

const routes: Routes = [
  {path: '', component:NavBarComponent,
    children:[
    {path:'home', component: HomeComponent},
    {path:'horario', component: ReservaScreenComponent},
    {path:'clases', component: ClasesComponent},
    {path:'misReservas', component: ReservasUsuarioComponent},
    {path:'cuenta', component: MiCuentaComponent},
    {path:'reservas', component: ReservasManagerComponent}
    ]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
