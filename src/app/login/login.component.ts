import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  passwd='';

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

  login():void{
    const user = {email: this.email, password: this.passwd};
    this.usersService.login(user)
      .subscribe(data => {console.log(data)});
  }

}
