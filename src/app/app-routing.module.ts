import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosMantHomeComponent } from './usuarios-mant-home/usuarios-mant-home.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';

const routes: Routes = [

  {path:'',pathMatch:'full', redirectTo:'iniciomant'},
{path:'usuariosmant',component:UsuariosMantHomeComponent},
{path:'iniciomant',component:InicioComponent},
{path:'navbar',component:NavbarComponent},
{path:'navbar2',component:Navbar2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
