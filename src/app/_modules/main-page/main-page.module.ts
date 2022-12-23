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
import { BoardCardComponent } from './board-card/board-card.component';
import { DialogBoardCardComponent } from './dialog-board-card/dialog-board-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactSingleComponent } from './contact-single/contact-single.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { DialogAddContactComponent } from './dialog-add-contact/dialog-add-contact.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { DialogEditContactComponent } from './dialog-edit-contact/dialog-edit-contact.component';
import { LogoutButtonModule } from '../logout-button/logout-button.module';




@NgModule({
  declarations: [
    MainPageComponent,
    SidebarComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    LegalNoticeComponent,
    HelpComponent,
    BoardCardComponent,
    DialogBoardCardComponent,
    ContactDetailComponent,
    ContactSingleComponent,
    DialogAddContactComponent,
    DialogAddTaskComponent,
    DialogEditContactComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HeaderFooterModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    LogoutButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), 
  
  ],
  exports: [
    MainPageComponent,
    SidebarComponent
  ]
})
export class MainPageModule { }
