import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin : FormGroup;

  constructor(private api :LoginService, private FormBuilder: FormBuilder ) {
    this.formularioLogin = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  public ingresar (){
    this.api.autenticar({
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    })
  }

}
