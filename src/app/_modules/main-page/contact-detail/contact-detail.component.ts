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
  rawContact:any;
  constructor(public dialog: MatDialog, public firebase: FirebasedataService) { }

  ngOnInit(): void {
    this.firebase.currentUserData$.subscribe(data=>{
      this.rawContact = data['contact'];
    })
  }
  getShorthand(){
    let firstnameLetter = this.rawContact['firstname'].slice("",1)
    let lastnameLetter = this.rawContact['lastname'].slice("",1)
    return lastnameLetter + firstnameLetter
  }

  openDialogEditContact(): void {
    this.dialog.open(DialogEditContactComponent, {
      width: '250px',
      data: this.data
    });
  }
  openDialogAddTaskWithContact(): void {
    this.dialog.open(DialogAddTaskComponent, {
      width: '250px',
      data: this.data
    });
  }
}
