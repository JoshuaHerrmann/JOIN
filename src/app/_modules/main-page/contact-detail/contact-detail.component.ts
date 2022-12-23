import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';
import { DialogEditContactComponent } from '../dialog-edit-contact/dialog-edit-contact.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() data;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  getShorthand(){
    let firstnameLetter = this.data['firstname'].slice("",1)
    let lastnameLetter = this.data['lastname'].slice("",1)
    return lastnameLetter + firstnameLetter
  }

  openDialogEditContact(): void {
    this.dialog.open(DialogEditContactComponent, {
      width: '250px',
    });
  }
  openDialogAddTaskWithContact(): void {
    this.dialog.open(DialogAddTaskComponent, {
      width: '250px',
    });
  }
}
