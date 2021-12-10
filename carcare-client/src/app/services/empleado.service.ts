import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_API= 'http://localhost:4000/api/empleados'

   empleados! : Empleado[];
   seleccionEmpleado: Empleado={
     contrasena: '',
     correo: '',
     direccion: '',
     nombre: '',
     telefono: '', 
   };
  constructor(private http:HttpClient) { }

  obtenerEmpleados(){
    return this.http.get<Empleado[]>(this.URL_API);
  }
  obtenerEmpleado(_id:string) {
    return this.http.get<Empleado>(`${this.URL_API}/${_id}`);
  }

  crearEmpleado(empleado: Empleado){
    return this.http.post(this.URL_API,empleado);
  }

  editarEmpleado(empleado:Empleado){
    return this.http.put(`${this.URL_API}/${empleado._id}`,empleado)
  }

  eliminarEmpleado(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }



}
