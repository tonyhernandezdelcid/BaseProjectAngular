import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ServicioApiService } from '../servicio-api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { DialogoErrorComponent } from '../dialogo-error/dialogo-error.component';






@Component({
  selector: 'app-usuarios-mant-add',
  templateUrl: './usuarios-mant-add.component.html',
  styleUrls: ['./usuarios-mant-add.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: 0 }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ]
})
export class UsuariosMantAddComponent implements OnInit {


  codigo: string = '';
  nombre: string = '';
  telefono: string = '';

  constructor(
    private servicioApiService:ServicioApiService,
    public dialog: MatDialog,
    private dialgoRef: MatDialogRef<any>){


    }

    ngOnInit(): void {}
    datos: string = '';

    insertar() {
      if (this.codigo != '') {

        if (this.nombre != '') {


          if (this.telefono != '') {



            this.datos =
            '{ \n'
            + '"codigo": "' + this.codigo + '", \n'
            + ' "nombre": "' + this.nombre + '", \n'
            + ' "telefono": "' + this.telefono + '", \n'
            + '}'

            this.servicioApiService.insertarUsuario(this.datos)




          const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
            data: {
              dataKey: 'El registro se ha agregado con éxito',
            },
            disableClose: true,
          });



          }else{

            const dialogRef = this.dialog.open(DialogoErrorComponent, {
              data: {
                dataKey: 'El teléfono no puede ir vacìo',
              },
              disableClose: true,
            });
          }



        }else{

          const dialogRef = this.dialog.open(DialogoErrorComponent, {
            data: {
              dataKey: 'El nombre no puede ir vacìo',
            },
            disableClose: true,
          });
        }


      }else{

        const dialogRef = this.dialog.open(DialogoErrorComponent, {
          data: {
            dataKey: 'El código no puede ir vacìo',
          },
          disableClose: true,
        });
      }





    }



    cerrar() {
      this.dialgoRef.close();
    }


}
