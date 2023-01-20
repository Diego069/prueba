import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {auth, authRespuesta} from 'src/app/modelos/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
private URL_AUTH: string = 'https://dummyjson.com/auth/login';
public datos : authRespuesta |undefined;

  constructor(private cliente : HttpClient) { }
  public autenticar ({username , password}:auth){
    this.cliente.post<authRespuesta>(this.URL_AUTH,{
      username,
      password
    },
    {
    headers:{
  'content-type': 'application/json'
}
    }).subscribe(datos =>{
      this.datos = datos
      console.log (datos)
    })
  }
}
