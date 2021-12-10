import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Servicio } from '../models/servicio';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  URL_API= 'http://localhost:4000/api/servicios'

   servicios! : Servicio[];
   seleccionServicio: Servicio={
     nombre: '',
     descripcion: '',
     precio: '',
     duracion: '', 
   };
  constructor(private http:HttpClient) { }

  obtenerServicios(){
    return this.http.get<Servicio[]>(this.URL_API);
  }

  crearServicio(servicio: Servicio){
    return this.http.post(this.URL_API,servicio);
  }

  editarServicio(servicio:Servicio){
    return this.http.put(`${this.URL_API}/${servicio._id}`,servicio)
  }

  eliminarServicio(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

}
