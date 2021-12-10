import { Component, OnInit } from '@angular/core';
import { PedidoService } from "../../services/pedido.service";
import { NgForm  } from '@angular/forms';
import { Pedido } from '../../models/pedido';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public pedidoService:PedidoService) { }

  ngOnInit(): void {

    this.obtenerPedidos()    
    
  }

  resetForm(form: NgForm){
      form.reset();
  }

  obtenerPedidos(){
    this.pedidoService.obtenerPedidos().subscribe(
      res => {
        this.pedidoService.pedidos = res;
      },
      err => console.error(err)
    )
  }

  agregarPedido(form:NgForm){
    if(form.value._id){
      this.pedidoService.editarPedido(form.value).subscribe(
        res => {
         console.log(res)
        },
        err => console.error(err)
      )
    }else{
      this.pedidoService.crearPedido(form.value).subscribe(
        res => {
         this.obtenerPedidos();
         form.reset();
        },
        err => console.error(err)
      )
    }
  }
  
  eliminarPedido(id:string){
    if(confirm("Eliminar registro?")){
      this.pedidoService.eliminarPedido(id).subscribe(
        res => {
         console.log(res)
         this.obtenerPedidos();
        },
        err => console.error(err)
      )
    }
    
  }

  editarPedido(pedido: Pedido){
    this.pedidoService.seleccionPedido=pedido;
  }


}
