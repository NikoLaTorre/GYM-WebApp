import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaIndefinidaComponent } from './ruta-indefinida.component';

const routes: Routes = [
  {path:'', component: RutaIndefinidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutaIndefinidaRoutingModule { }
