import { Component, OnInit } from '@angular/core';
import { PedidoService } from "../../services/pedido.service";
import { NgForm  } from '@angular/forms';
import { Pedido } from '../../models/pedido';
import { ServicioService} from '../../services/servicio.service'
import { ComplementoService} from '../../services/complemento.service'
import { EmpleadoService } from '../../services/empleado.service'
@Component({
  selector: 'app-pedidocliente',
  templateUrl: './pedidocliente.component.html',
  styleUrls: ['./pedidocliente.component.css']
})
export class PedidoclienteComponent implements OnInit {
  precioTotal=0;
  totatilo='';
  constructor(public pedidoService:PedidoService,public servicioService:ServicioService,
    public complementoService:ComplementoService,public empleadoService:EmpleadoService) { }
  ngOnInit(): void {

    this.obtenerPedidos()    
    this.obtenerServicios()
    this.obtenerComplementos()
    this.sumar()
    this.obtenerEmpleados()
  }

  resetForm(form: NgForm){
      form.reset();
  }
  sumar(){
    let totalservicio=this.pedidoService.seleccionPedido.nombreServicio.split(',')[1];
    let totalcomplemento=this.pedidoService.seleccionPedido.nombreComplemento.split(',')[1];
    this.precioTotal= parseInt(totalservicio)+parseInt(totalcomplemento);

    this.totatilo=this.precioTotal.toString()
    this.pedidoService.seleccionPedido.precioTotal=this.totatilo
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

  obtenerServicios(){
    this.servicioService.obtenerServicios().subscribe(
      res => {
        this.servicioService.servicios = res;
      },
      err => console.error(err)
    )
  }

  obtenerComplementos(){
    this.complementoService.obtenerComplementos().subscribe(
      res => {
        this.complementoService.complementos = res;
      },
      err => console.error(err)
    )
  }

  obtenerEmpleados(){
    this.empleadoService.obtenerEmpleados().subscribe(
      res => {
        this.empleadoService.empleados = res;
      },
      err => console.error(err)
    )
  }

}
