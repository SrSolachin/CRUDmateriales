import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data:Array<any> = [];
  nombre:string = '';
  unidadMedida:string = '';
  precio:number = 0;
  stock:number = 0;
  total:number = 0;
  contentModal:any;
  stateChange:boolean = false;
  position: number = 0;

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content: any) {
    this.contentModal = content;
		this.modalService.open(content, { windowClass: 'dark-modal' });
    this.nombre = '';
    this.unidadMedida = '';
    this.precio = 0;
    this.stock = 0;
	}

  crearMaterInfo(){
    let info = {
      nombre: this.nombre,
      unidadMedida: this.unidadMedida,
      precio: this.precio,
      stock: this.stock,
      total: this.precio * this.stock
    }
    this.data.unshift(info);
    this.modalService.dismissAll();
    this.nombre = '';
    this.unidadMedida = '';
    this.precio = 0;
    this.stock = 0;
  }

  editarMateInfo(i: number){
    this.position = i;
    this.modalService.open(this.contentModal, { windowClass: 'dark-modal' });
    this.stateChange = true;
    this.nombre = this.data[i].nombre;
    this.unidadMedida = this.data[i].unidadMedida;
    this.precio = this.data[i].precio;
    this.stock = this.data[i].stock;
  }

  modificarMaterInfo(){
    this.data[this.position].nombre = this.nombre;
    this.data[this.position].unidadMedida = this.unidadMedida;
    this.data[this.position].precio = this.precio;
    this.data[this.position].stock = this.stock;
    this.modalService.dismissAll();
    this.nombre = '';
    this.unidadMedida = '';
    this.precio = 0;
    this.stock = 0;
  }

  eliminarMaterInfo(i: number){
    this.data.splice(i, 1);
  }

}
