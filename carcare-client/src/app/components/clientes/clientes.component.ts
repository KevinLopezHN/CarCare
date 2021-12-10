import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { NgForm  } from '@angular/forms';
import { Cliente } from '../../models/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public clienteService:ClienteService) { }

  ngOnInit(): void {

    this.obtenerClientes()    
    
  }

  resetForm(form: NgForm){
      form.reset();
  }

  obtenerClientes(){
    this.clienteService.obtenerClientes().subscribe(
      res => {
        this.clienteService.clientes = res;
      },
      err => console.error(err)
    )
  }

  agregarCliente(form:NgForm){
    if(form.value._id){
      this.clienteService.editarCliente(form.value).subscribe(
        res => {
         console.log(res)
        },
        err => console.error(err)
      )
    }else{
      this.clienteService.crearCliente(form.value).subscribe(
        res => {
         this.obtenerClientes();
         form.reset();
        },
        err => console.error(err)
      )
    }
  }
  
  eliminarCliente(id:string){
    if(confirm("Eliminar registro?")){
      this.clienteService.eliminarCliente(id).subscribe(
        res => {
         console.log(res)
         this.obtenerClientes();
        },
        err => console.error(err)
      )
    }
    
  }

  editarCliente(cliente: Cliente){
    this.clienteService.seleccionCliente=cliente;
  }


}
