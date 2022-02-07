import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public listaProductos: any[];

  constructor(private _productoService: ProductoService,
              private ruta : ActivatedRoute) { }

  ngOnInit() {
    this.obtenerProductos();
  }


  obtenerProductos(){
    const id = this.ruta.snapshot.paramMap.get('id')
    this._productoService.getProductos(id).subscribe(data =>{
      this.listaProductos=data;
      console.log(this.listaProductos);
    });
  }
}
