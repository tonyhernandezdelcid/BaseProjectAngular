import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  minombre = window.sessionStorage.getItem("Nombre");
  miapellido = window.sessionStorage.getItem("Apellido");
  mirol = window.sessionStorage.getItem("Rol");

  constructor(private rutas:Router) { }
  isNavbarCollapsed=true;
  ngOnInit(): void {

  //VALIDAMOS SI ESTA CREADA LA VARIABLE DE SESIÓN, SINO REGRESA AL LOGIN
  if(this.minombre==null){
    //this.rutas.navigate(["/login"])
  }
  }
//METODO PARA CERRAR SESIÓN Y EVITAR EL REINGRESO A LAS OTRAS PAGINAS SIN NECESIDAD DE LOGEARSE O JUSTO
//DESPUES DE SALIR
  cerrarSesion(){
    sessionStorage.clear()
    //this.rutas.navigate(["/login"])
  }

  estoyQ(){
  return true
  }
  estoy$(){
  return false
  }
  estoyR(){
  return false;
  }

}
