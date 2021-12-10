import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../../services/empleado.service";
import { NgForm  } from '@angular/forms';
import { Empleado } from '../../models/empleado';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService:EmpleadoService) { }

  ngOnInit(): void {

    this.obtenerEmpleados()    
    
  }

  resetForm(form: NgForm){
      form.reset();
  }

  obtenerEmpleados(){
    this.empleadoService.obtenerEmpleados().subscribe(
      res => {
        this.empleadoService.empleados = res;
      },
      err => console.error(err)
    )
  }

  agregarEmpleado(form:NgForm){
    if(form.value._id){
      this.empleadoService.editarEmpleado(form.value).subscribe(
        res => {
         console.log(res)
        },
        err => console.error(err)
      )
    }else{
      this.empleadoService.crearEmpleado(form.value).subscribe(
        res => {
         this.obtenerEmpleados();
         form.reset();
        },
        err => console.error(err)
      )
    }
  }
  
  eliminarEmpleado(id:string){
    if(confirm("Eliminar registro?")){
      this.empleadoService.eliminarEmpleado(id).subscribe(
        res => {
         console.log(res)
         this.obtenerEmpleados();
        },
        err => console.error(err)
      )
    }
    
  }

  editarEmpleado(empleado: Empleado){
    this.empleadoService.seleccionEmpleado=empleado;
  }

}
