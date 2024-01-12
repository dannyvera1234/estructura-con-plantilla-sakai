import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TempleComponent } from './pages/temple/temple.component';

import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [ClientesComponent, InicioComponent,TempleComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    SharedModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    DataViewModule,
    TableModule,
    ChartModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    BreadcrumbModule,

  ],
})
export class ModelsModule {}
