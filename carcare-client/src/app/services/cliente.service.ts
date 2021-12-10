import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_API= 'http://localhost:4000/api/clientes'

  clientes! : Cliente[];
  seleccionCliente: Cliente={
    nombre: '',
    telefono: '',
    direccion: '',
    correo: '',
    carro: '', 
    contrasena:'',
  };
 constructor(private http:HttpClient) { }

 obtenerClientes(){
   return this.http.get<Cliente[]>(this.URL_API);
 }

 crearCliente(cliente: Cliente){
   return this.http.post(this.URL_API,cliente);
 }

 editarCliente(cliente:Cliente){
   return this.http.put(`${this.URL_API}/${cliente._id}`,cliente)
 }

 eliminarCliente(_id: string){
   return this.http.delete(`${this.URL_API}/${_id}`)
 }
}
