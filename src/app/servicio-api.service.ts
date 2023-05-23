import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }


  consultarUsuarios() {
    let b = this.http.get('http://localhost:8080/baseprojectapi/consultausuarios');
    console.log(b)
    return b;
  }

  insertarUsuario(data: any){
    return this.http.post('http://localhost:8080/baseprojectapi/crearusuario', data, { responseType: 'text'}).toPromise();
  }

}
