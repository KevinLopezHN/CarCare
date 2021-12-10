import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public servicioService:ServicioService) { }

  ngOnInit(): void {
    this.obtenerServicios()    
  }
  obtenerServicios(){
    this.servicioService.obtenerServicios().subscribe(
      res => {
        this.servicioService.servicios = res;
      },
      err => console.error(err)
    )
  }
  
}
