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

}
