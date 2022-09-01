import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  exports: [
    MainPageComponent,
    SidebarComponent
  ]
})
export class MainPageModule { }
