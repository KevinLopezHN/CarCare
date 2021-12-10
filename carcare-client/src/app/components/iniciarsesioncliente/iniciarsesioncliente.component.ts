import { Component, OnInit } from '@angular/core';
import { AuthclienteService } from '../../services/authcliente.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-iniciarsesioncliente',
  templateUrl: './iniciarsesioncliente.component.html',
  styleUrls: ['./iniciarsesioncliente.component.css']
})
export class IniciarsesionclienteComponent implements OnInit {
  user={
    correo:'',
    contrasena:'',
  }
  constructor(
    private authclienteService:AuthclienteService,
    private router:Router
  ) { }
 
  ngOnInit(): void {
  }

  signIn(){
    this.authclienteService.signIn(this.user).
    subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/ClienteTablero']);
      },
      err => console.log(err)
    )
  }
}
