import { Component, OnInit } from '@angular/core';
import { AuthclienteService } from '../../services/authcliente.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registrorocliente',
  templateUrl: './registrorocliente.component.html',
  styleUrls: ['./registrorocliente.component.css']
})
export class RegistroroclienteComponent implements OnInit {

  constructor(private authclienteService:AuthclienteService,
    private router: Router) { }
  user={
    nombre:'',
    telefono:'',
    direccion:'',
    carro:'',
    correo:'',
    contrasena:''
  }
  ngOnInit(): void {
  }
  signUp(){
    this.authclienteService.signUp(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/iniciarsesionrol']);
      },
      err => console.log(err)
    )
  }
}
