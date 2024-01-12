import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './elementos/footer/footer.component';
import { HeaderComponent } from './elementos/header/header.component';
import { SidebarComponent } from './elementos/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';


;

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  
   
    
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,   
           
    
  ],
})
export class SharedModule {}
