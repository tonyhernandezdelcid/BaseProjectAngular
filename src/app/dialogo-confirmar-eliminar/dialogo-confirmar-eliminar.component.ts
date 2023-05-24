import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioApiService } from '../servicio-api.service';

@Component({
  selector: 'app-dialogo-confirmar-eliminar',
  templateUrl: './dialogo-confirmar-eliminar.component.html',
  styleUrls: ['./dialogo-confirmar-eliminar.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: 0 }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ],
})
export class DialogoConfirmarEliminarComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioApiService:ServicioApiService,
    private dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.mensaje = this.data.dataKey;
  }

  mensaje: string = '';

  recargar() {
    this.dialogRef.close();
  }


  empresaEliminar: string = '';
  rolEliminar: string = '';

  eliminarObjeto() {
    let oki = false;



     // let datosUsu =
     // '{ \n'
     // + '"codigo": "' + this.data.row.codigo + '", \n'
     // + '}'


      this.servicioApiService.eliminarUsuario(''+this.data.row.codigo )

      oki = true;
      if (oki === true) {
        location.reload();
      }
    }

}
