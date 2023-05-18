import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  //VARIABLES PARA EL MANEJO DE LA PESTAÑA ACTUAL
  uno = "";
  dos = "";
  tres = "";
  cuatro = "";
  cinco = "";
  //VARIABLES PARA EL MANEJO DE LOS PERMISOS
  per1 ="";
  per2 = "";
  per3 = "";
  per4 = "";
  minombre = window.sessionStorage.getItem("Nombre");
  miapellido = window.sessionStorage.getItem("Apellido");
  constructor(private rutas:Router) { }
  isNavbarCollapsed=true;
  ngOnInit(): void {
    //DECISIÓN DE QUE PESTAÑAS MOSTRAR BASADO EN LAS VARIABLES QUE SE GUARDAN EN LA SESIÓN DESDE EL LOGIN
    let actual = sessionStorage.getItem('PaginaActual');
    switch (actual){
      case 'GQ':{
                this.uno = "active"
        break;
      }
      case 'G$':{
                this.dos = "active"
        break;

      }
      case 'REP':{
                this.tres = "active"
        break;
      }

      case 'CLI':{
                this.cuatro = "active"
        break;
      }
      case 'CMP':{
                this.cinco = "active"
        break;
      }
    }

    //TAMBIÉN SE MARCA LA PESTAÑA ACTUAL
  }
actual1(){
  return this.uno
}
actual2(){
  return this.dos
}
actual3(){
  return this.tres
}
actual4(){
  return this.cuatro
}
actual5(){
  return this.cinco
}
cerrarSesion(){
  sessionStorage.clear()
  //this.rutas.navigate(["/login"])
}
}
