import { Component } from '@angular/core';
import { ServicioApiService } from '../servicio-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private servicioApiService:ServicioApiService) {
    //CREANDO SESIÓN
  //  sessionStorage.setItem('PaginaActual', 'CRUDU');
  }
  probandoMicro(){
    this.servicioApiService.consultarUsuarios().subscribe(async (data: any) => {
           this.consultaUsuarios(await data)
         })
     }

     consultaUsuarios(entrada:any){
      console.log(entrada)
    }

}
