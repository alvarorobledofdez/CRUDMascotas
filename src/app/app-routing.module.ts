import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './modificar/modificar.component';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';


const routes: Routes = [{
	path: 'alta',
	component: AltaComponent
},
{
	path: 'listado',
	component: ListadoComponent
},
{
	path: 'modificar',
	component: ModificarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
