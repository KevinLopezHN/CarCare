import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import {AuthadministradorService} from './authadministrador.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptoradministradorService {
 
  constructor(private authadministradorService: AuthadministradorService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authadministradorService.getToken()
    if (!token) return next.handle(req);

    const tokenizeReq = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)
    });
    return next.handle(tokenizeReq);
  } 
}
