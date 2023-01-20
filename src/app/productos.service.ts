import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {authRespuesta, productsRespuesta} from './modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL_PRODUCTOS : string = 'https://dummyjson.com/auth/products';
  public productos!: productsRespuesta;
  public datos!: authRespuesta;

  constructor(private cliente : HttpClient) {}
  public rescatarProductos(){
    this.cliente.get<productsRespuesta>(this.URL_PRODUCTOS,
    {headers:{
      'Authorization' : `Bearer ${this.datos?.token}`,
      'content-type' : 'application/json'}
    }).subscribe(datos =>{
      this.productos = datos;
    });
  }

  public obtenerProductos(){
    return this.productos;
  }
  }
