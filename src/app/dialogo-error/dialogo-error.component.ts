import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-error',
  templateUrl: './dialogo-error.component.html',
  styleUrls: ['./dialogo-error.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: '*', opacity: 0 }),
            animate('500ms ease-in-out')
          ]
        ),
      ]
    )
  ]
})
export class DialogoErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,

  private dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {

    this.mensaje = this.data.dataKey
  }

  mensaje: string = "";

  recargar(){
    this.dialogRef.close();
  }

}
