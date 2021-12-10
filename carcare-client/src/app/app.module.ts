import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ComplementoComponent } from './components/complemento/complemento.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { PedidoclienteComponent } from './components/pedidocliente/pedidocliente.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { RegistrorolComponent } from './components/registrorol/registrorol.component';
import { RegistroroclienteComponent } from './components/registrorocliente/registrorocliente.component';
import { IniciarsesionrolComponent } from './components/iniciarsesionrol/iniciarsesionrol.component';
import { IniciarsesionclienteComponent } from './components/iniciarsesioncliente/iniciarsesioncliente.component';
import { IniciarsesionadministradorComponent } from './components/iniciarsesionadministrador/iniciarsesionadministrador.component';
import { AdministradortableroComponent } from './components/administradortablero/administradortablero.component';
import { ClientetableroComponent } from './components/clientetablero/clientetablero.component';
import { EmpleadotableroComponent } from './components/empleadotablero/empleadotablero.component';
import { PedidoempleadoComponent } from './components/pedidoempleado/pedidoempleado.component'
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'registrorol', component: RegistrorolComponent },
  { path: 'RegistroEmpleado', component: RegistroComponent },
  { path: 'RegistroCliente', component: RegistroroclienteComponent },
  { path: 'iniciarsesionrol', component: IniciarsesionrolComponent },
  { path: 'IniciarSesionEmpleado', component: IniciarsesionComponent },
  { path: 'IniciarSesionCliente', component: IniciarsesionclienteComponent },
  { path: 'IniciarSesionAdministrador', component: IniciarsesionadministradorComponent },
  { path: 'AdministradorTablero', component: AdministradortableroComponent, canActivate:[AuthGuard],
      children:[
        { path: 'empleado', component: EmpleadoComponent, canActivate:[AuthGuard] },
        { path: 'cliente', component: ClientesComponent, canActivate:[AuthGuard] },
        { path: 'servicio', component: ServiciosComponent, canActivate:[AuthGuard] },
        { path: 'complemento', component: ComplementoComponent, canActivate:[AuthGuard] },
        { path: 'pedido', component: PedidoComponent, canActivate:[AuthGuard] },
      ]
},
{ path: 'ClienteTablero', component: ClientetableroComponent, canActivate:[AuthGuard],
      children:[
        { path: 'pedidocliente', component: PedidoclienteComponent, canActivate:[AuthGuard] },
      ]
},
{ path: 'EmpleadoTablero', component: EmpleadotableroComponent, canActivate:[AuthGuard],
      children:[
        { path: 'pedidoempleado', component: PedidoempleadoComponent, canActivate:[AuthGuard] },
      ]
},
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ServiciosComponent,
    ClientesComponent,
    ComplementoComponent,
    PedidoComponent,
    InicioComponent,
    AcercaComponent,
    PreguntaComponent,
    PedidoclienteComponent,
    RegistroComponent,
    IniciarsesionComponent,
    RegistrorolComponent,
    RegistroroclienteComponent,
    IniciarsesionrolComponent,
    IniciarsesionclienteComponent,
    IniciarsesionadministradorComponent,
    AdministradortableroComponent,
    ClientetableroComponent,
    EmpleadotableroComponent,
    PedidoempleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ], 
  providers: [
     AuthGuard,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
