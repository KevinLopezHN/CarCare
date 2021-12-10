import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  user={
    correo:'',
    contrasena:'',
  }
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }
 
  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user).
    subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/EmpleadoTablero']);
      },
      err => console.log(err)
    )
  }
}
