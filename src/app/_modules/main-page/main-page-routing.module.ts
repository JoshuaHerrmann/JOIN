import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpComponent } from './help/help.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: 'main', component: MainPageComponent, children:[
    {path: '', component: SummaryComponent},
    {path: 'board', component: BoardComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'help', component: HelpComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
