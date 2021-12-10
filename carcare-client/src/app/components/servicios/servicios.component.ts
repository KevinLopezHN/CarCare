import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service";
import { NgForm  } from '@angular/forms';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public servicioService:ServicioService) { }

  ngOnInit(): void {

    this.obtenerServicios()    
    
  }

  resetForm(form: NgForm){
      form.reset();
  }

  obtenerServicios(){
    this.servicioService.obtenerServicios().subscribe(
      res => {
        this.servicioService.servicios = res;
      },
      err => console.error(err)
    )
  }

  agregarServicio(form:NgForm){
    if(form.value._id){
      this.servicioService.editarServicio(form.value).subscribe(
        res => {
         console.log(res)
        },
        err => console.error(err)
      )
    }else{
      this.servicioService.crearServicio(form.value).subscribe(
        res => {
         this.obtenerServicios();
         form.reset();
        },
        err => console.error(err)
      )
    }
  }
  
  eliminarServicio(id:string){
    if(confirm("Eliminar registro?")){
      this.servicioService.eliminarServicio(id).subscribe(
        res => {
         console.log(res)
         this.obtenerServicios();
        },
        err => console.error(err)
      )
    }
    
  }

  editarServicio(servicio: Servicio){
    this.servicioService.seleccionServicio=servicio;
  }


}
