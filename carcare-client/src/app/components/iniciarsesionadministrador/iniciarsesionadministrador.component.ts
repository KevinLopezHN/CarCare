import { Component, OnInit } from '@angular/core';
import { AuthadministradorService } from '../../services/authadministrador.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-iniciarsesionadministrador',
  templateUrl: './iniciarsesionadministrador.component.html',
  styleUrls: ['./iniciarsesionadministrador.component.css']
})
export class IniciarsesionadministradorComponent implements OnInit {

  user={
    correo:'',
    contrasena:'',
  }
  constructor(
    private authadministradorService:AuthadministradorService,
    private router:Router
  ) { }
 
  ngOnInit(): void {
  }

  signIn(){
    this.authadministradorService.signIn(this.user).
    subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/AdministradorTablero']);
      },
      err => console.log(err)
    )
  }

}
