import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioApiService } from '../servicio-api.service';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { DialogoErrorComponent } from '../dialogo-error/dialogo-error.component';



@Component({
  selector: 'app-usuarios-mant-edit',
  templateUrl: './usuarios-mant-edit.component.html',
  styleUrls: ['./usuarios-mant-edit.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: 0 }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ]
})
export class UsuariosMantEditComponent implements OnInit {


  codigo: string = '';
  nombre: string = '';
  telefono: string = '';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioApiService:ServicioApiService,
    public dialog: MatDialog,
    private dialgoRef: MatDialogRef<any>
  ) {


    console.log(data)

  }

  ngOnInit(): void {

    this.codigo = this.data.dataKey.codigo;
    this.nombre = this.data.dataKey.nombre;
    this.telefono= this.data.dataKey.telefono;

    }



    datos: string = '';
  editar() {
    if (this.codigo != '') {
      if (this.nombre != '') {
        if(this.telefono != ""){
                this.datos =
                '{ \n'
                + ' "codigo": "' + this.codigo + '", \n'
                + ' "nombre": "' + this.nombre + '", \n'
                + ' "telefono": "' + this.telefono + '" \n'
                + '}'

                this.servicioApiService.editarUsuario(this.datos)

                const dialogRef = this.dialog.open(DialogoConfirmacionComponent, {
                  data: {
                    dataKey: 'El registro se ha editado con exito',
                  },
                  disableClose: true,
                });





        }else{
          const dialogRef = this.dialog.open(DialogoErrorComponent, {
            data: {
              dataKey: 'El teléfono no puede ir vacío',
            },
            disableClose: true,
          });
        }
      } else {
        const dialogRef = this.dialog.open(DialogoErrorComponent, {
          data: {
            dataKey: 'La nombre no puede ir vacía',
          },
          disableClose: true,
        });
      }
    } else {
      const dialogRef = this.dialog.open(DialogoErrorComponent, {
        data: {
          dataKey: 'El código del usuario no puede ir vacío',
        },
        disableClose: true,
      });
    }
  }


cerrar() {
    this.dialgoRef.close();
  }

}
