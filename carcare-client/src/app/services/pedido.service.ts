import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pedido } from '../models/pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  URL_API= 'http://localhost:4000/api/pedidos'

  pedidos! : Pedido[];
  seleccionPedido: Pedido={
    nombreEmpleado: '',
    nombreCliente: '',
    direccionCliente: '',
    carroCliente: '',
    telefonoCliente: '',
    nombreServicio:'',
    nombreComplemento:'',
    precioTotal:'',
    instrucciones:'',
    fecha: new Date,
    estado:'',
  };
 constructor(private http:HttpClient) { }

 obtenerPedidos(){
   return this.http.get<Pedido[]>(this.URL_API);
 }

 crearPedido(pedido: Pedido){
   return this.http.post(this.URL_API,pedido);
 }

 editarPedido(pedido:Pedido){
   return this.http.put(`${this.URL_API}/${pedido._id}`,pedido)
 }

 eliminarPedido(_id: string){
   return this.http.delete(`${this.URL_API}/${_id}`)
 }
}
