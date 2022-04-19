import { Component, OnInit } from '@angular/core';
import { DetalleReservasService } from '../detalle-reservas.service';
import { UsuariosService } from '../usuarios-detalle.service';
import { Usuarios } from '../usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  hoy: Date = new Date();
  usuario: Usuarios | undefined;
  reservasDisponibles: number = 1;

  constructor(private usuariosService: UsuariosService, private reservasService: DetalleReservasService, public router: Router) { 
    this.getUsuario();
  }

  ngOnInit(): void {
    this.getReservasDisponibles()
  }

  getUsuario(): void{
    if (localStorage.getItem('user') !== null){
      this.usuariosService.getUsuario(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(usuario => this.usuario = usuario[0]);
    }
  }

  async getReservasDisponibles(){
    if (localStorage.getItem('user') !== null){
      this.reservasDisponibles = await this.reservasService.getReservasDisponibles(this.hoy.getMonth()+1, JSON.parse(localStorage.getItem('user')!).uid)
    }
    else{
      this.reservasDisponibles = -1;
    }
  }

  async agregarCreditos(value: number){
    if (this.usuario){
      this.usuario.creditos += value;
      await this.usuariosService.updateUsuario(this.usuario)
        .subscribe(() => this.reservasDisponibles += this.usuario!.creditos);
      
    }
  }

  getMonth():string{
    if (this.hoy.getMonth() == 0 ){
      return "Enero";
    }
    else if (this.hoy.getMonth() == 1 ){
      return "Febrero";
    }
    else if (this.hoy.getMonth() == 2 ){
      return "Marzo";
    }
    else if (this.hoy.getMonth() == 3 ){
      return "Abril";
    }
    else if (this.hoy.getMonth() == 4 ){
      return "Mayo";
    }
    else if (this.hoy.getMonth() == 5 ){
      return "Junio";
    }
    else if (this.hoy.getMonth() == 6 ){
      return "Julio";
    }
    else if (this.hoy.getMonth() == 7 ){
      return "Agosto";
    }
    else if (this.hoy.getMonth() == 8 ){
      return "Septiembre";
    }
    else if (this.hoy.getMonth() == 9 ){
      return "Octubre";
    }
    else if (this.hoy.getMonth() == 10 ){
      return "Noviembre";
    }
    else if (this.hoy.getMonth() == 11 ){
      return "Diciembre";
    }
    else{
      return "error";
    }
  }

}
