import { Component, OnInit } from '@angular/core';
import { ComplementoService } from "../../services/complemento.service";
import { NgForm  } from '@angular/forms';
import { Complemento } from '../../models/complemento';
@Component({
  selector: 'app-complemento',
  templateUrl: './complemento.component.html',
  styleUrls: ['./complemento.component.css']
})
export class ComplementoComponent implements OnInit {

  constructor(public complementoService:ComplementoService) { }

  ngOnInit(): void {

    this.obtenerComplementos()    
    
  }

  resetForm(form: NgForm){
      form.reset();
  }

  obtenerComplementos(){
    this.complementoService.obtenerComplementos().subscribe(
      res => {
        this.complementoService.complementos = res;
      },
      err => console.error(err)
    )
  }

  agregarComplemento(form:NgForm){
    if(form.value._id){
      this.complementoService.editarComplemento(form.value).subscribe(
        res => {
         console.log(res)
        },
        err => console.error(err)
      )
    }else{
      this.complementoService.crearComplemento(form.value).subscribe(
        res => {
         this.obtenerComplementos();
         form.reset();
        },
        err => console.error(err)
      )
    }
  }
  
  eliminarComplemento(id:string){
    if(confirm("Eliminar registro?")){
      this.complementoService.eliminarComplemento(id).subscribe(
        res => {
         console.log(res)
         this.obtenerComplementos();
        },
        err => console.error(err)
      )
    }
    
  }

  editarComplemento(complemento: Complemento){
    this.complementoService.seleccionComplemento=complemento;
  }


}
