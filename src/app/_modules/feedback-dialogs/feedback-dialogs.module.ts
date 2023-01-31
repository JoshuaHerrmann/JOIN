import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackDialogsRoutingModule } from './feedback-dialogs-routing.module';
import { UpdatedTaskComponent } from './updated-task/updated-task.component';
import { DeletedTaskComponent } from './deleted-task/deleted-task.component';
import { DeletedContactComponent } from './deleted-contact/deleted-contact.component';
import { UpdatedContactComponent } from './updated-contact/updated-contact.component';
import { CreatedContactComponent } from './created-contact/created-contact.component';
import { CreatedTaskComponent } from './created-task/created-task.component';


@NgModule({
  declarations: [
    UpdatedTaskComponent,
    DeletedTaskComponent,
    DeletedContactComponent,
    UpdatedContactComponent,
    CreatedContactComponent,
    CreatedTaskComponent
  ],
  imports: [
    CommonModule,
    FeedbackDialogsRoutingModule
  ],
  exports: [
    UpdatedTaskComponent,
    DeletedTaskComponent,
    DeletedContactComponent,
    UpdatedContactComponent,
    CreatedContactComponent,
    CreatedTaskComponent,
    
  ]
})
export class FeedbackDialogsModule { }
