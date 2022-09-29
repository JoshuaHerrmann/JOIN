import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutPageRoutingModule } from './logout-page-routing.module';
import { LogoutPageComponent } from './logout-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogoutPageComponent
  ],
  imports: [
    CommonModule,
    LogoutPageRoutingModule,
    FormsModule
  ],
  exports: [
    LogoutPageComponent
  ]
})
export class LogoutPageModule { }
