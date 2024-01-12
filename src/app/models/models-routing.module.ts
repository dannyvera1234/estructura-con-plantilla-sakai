import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TempleComponent } from './pages/temple/temple.component';



@NgModule({
  imports: [RouterModule.forChild(
    [
      {
        path:'', component:TempleComponent,
        children:[
          {path:'inicio', component:InicioComponent},
          {path:'clientes', component:ClientesComponent},
         
        ]
      }
    ]
  )],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
