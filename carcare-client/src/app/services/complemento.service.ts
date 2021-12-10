import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Complemento } from '../models/complemento';
@Injectable({
  providedIn: 'root'
})
export class ComplementoService {


  URL_API= 'http://localhost:4000/api/complementos'

   complementos! : Complemento[];
   seleccionComplemento: Complemento={
     nombre: '',
     descripcion: '',
     precio: '', 
   };
  constructor(private http:HttpClient) { }

  obtenerComplementos(){
    return this.http.get<Complemento[]>(this.URL_API);
  }

  crearComplemento(complemento: Complemento){
    return this.http.post(this.URL_API,complemento);
  }

  editarComplemento(complemento:Complemento){
    return this.http.put(`${this.URL_API}/${complemento._id}`,complemento)
  }

  eliminarComplemento(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
