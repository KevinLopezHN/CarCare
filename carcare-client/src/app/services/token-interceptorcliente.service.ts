import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import {AuthclienteService} from './authcliente.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorclienteService {

 
  constructor(private authclienteService: AuthclienteService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authclienteService.getToken()
    if (!token) return next.handle(req);

    const tokenizeReq = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)
    });
    return next.handle(tokenizeReq);
  } 
}
