import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderFooterRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  
  ]
})
export class HeaderFooterModule { }
