import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ServicioApiService } from '../servicio-api.service';
import { UsuariosMantAddComponent } from '../usuarios-mant-add/usuarios-mant-add.component';
import { DialogoConfirmarEliminarComponent } from '../dialogo-confirmar-eliminar/dialogo-confirmar-eliminar.component';

export interface Usuario {
  codigo: string;
  nombre: string;
  telefono: string;
}

const milista: Usuario[] = [];

@Component({
  selector: 'app-usuarios-mant-home',
  templateUrl: './usuarios-mant-home.component.html',
  styleUrls: ['./usuarios-mant-home.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '*', opacity: 0 }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ]
})
export class UsuariosMantHomeComponent implements OnInit, AfterViewInit {
  tulista = milista;
  dialogo = false;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  dataSource = new MatTableDataSource<Usuario>();
  constructor(
    private servicioApiService:ServicioApiService,
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {
    this.tulista = [];
    this.servicioApiService.consultarUsuarios().subscribe(async (data: any) => {
     this.tablaUsuario(await data);
   });
  }


  ngOnInit(): void {


  }

  codigo: string='';
  nombre: string='';
  telefono: string='';

  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'telefono',
    'editar',
    'eliminar',

  ];


  tablaUsuario(data: any) {
    let listaDatos = JSON.parse(JSON.stringify(data));

    let nuevalista: Usuario[] = [];
    for (let entry of listaDatos) {
      this.tulista.push(entry);
    }

    this.dataSource.data = data;

    return nuevalista;
  }

  clickedRows = new Set<Usuario>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  abrirDialogo(){
    const dialogRef = this.dialog.open(UsuariosMantAddComponent, {
      data: {
        dataKey: 'Agregar usuario',
      },
      disableClose: true,
    });
  }


  eliminar(row: any){

    sessionStorage.setItem('pagina', 'US');
    let misesion = window.sessionStorage.getItem('pagina');

    const dialogRef = this.dialog.open(DialogoConfirmarEliminarComponent, {
      data: {
        dataKey: '¿Desea eliminar el registro?', row, misesion
      },
      disableClose: true,
    });


  }

}
