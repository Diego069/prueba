import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/productos.service';
import {products, productsRespuesta} from 'src/app/modelos/auth';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage  {
  productos!: productsRespuesta;


  constructor(public productosService: ProductosService ) { }

  ionViewWillEnter(){
    this.productosService.rescatarProductos();
   }
}
