import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-mant-view',
  templateUrl: './usuarios-mant-view.component.html',
  styleUrls: ['./usuarios-mant-view.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: 0 }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ]
})
export class UsuariosMantViewComponent implements OnInit{

  codigo: string = '';
  nombre: string = '';
  telefono: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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




cerrar() {
  this.dialgoRef.close();
}


}
