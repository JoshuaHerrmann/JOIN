import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HelpComponent } from './help/help.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    MainPageComponent,
    SidebarComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    LegalNoticeComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HeaderFooterModule,
    MatIconModule
  ],
  exports: [
    MainPageComponent,
    SidebarComponent
  ]
})
export class MainPageModule { }
