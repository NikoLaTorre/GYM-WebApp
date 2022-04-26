import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { UsuariosService } from '../usuarios-detalle.service';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuariosBD: Usuarios[] = [];
  registerForm: FormGroup;

  constructor(public firebaseService: FirebaseService, public router: Router, 
    private usuariosService: UsuariosService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', [Validators.required]],
      chkPasswd: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required]]
    })
  }

  async register(){
    await this.firebaseService.signUp(this.registerForm.get('email')?.value, this.registerForm.get('passwd')?.value);
    if (this.firebaseService.isLoggedIn){
      let usuario = {idUsuario: JSON.parse(localStorage.getItem('user')!).uid, nombre: this.registerForm.get('nombre')?.value,
      apellido: this.registerForm.get('apellido')?.value, email: this.registerForm.get('email')?.value, rol: "cliente", creditos: 0}
      this.usuariosService.addUsuario(usuario as Usuarios)
        .subscribe(usuario => {this.usuariosBD.push(usuario)})
      this.router.navigate(['/'])
    }
  }

  getUsuarios(): void{
    if (localStorage.getItem('user') !== null){
      this.usuariosService.getUsuarios()
        .subscribe(usuario => this.usuariosBD = usuario);
    }
  }

  passwordMatchValidator(passwd: string, chkpasswd: string){   // ver como aplicar el estilo
    
  }

}
