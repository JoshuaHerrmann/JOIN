import { Component, Inject, Input, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.class';
@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss']
})
export class DialogEditContactComponent implements OnInit {
  
  currentContact = new Contact()
  constructor(public firebase: FirebasedataService, @Inject(MAT_DIALOG_DATA) public data:any,public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.currentContact = new Contact(this.data['contact'])
  }


  updateContactDB(){
    this.firebase.updateContactFromDB(this.currentContact.returnToJson(), this.data['contactId'])
  }
}
