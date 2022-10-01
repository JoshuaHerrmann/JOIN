import { Component, Input, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { DialogAddContactComponent } from '../dialog-add-contact/dialog-add-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {

  detail: boolean = false;
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N' ,'O', 'P' ,'Q', 'R', 'S', 'T' ,'U', 'V', 'W', 'X', 'Y', 'Z'];
  userList: Array<any> = [];
  userDetail:any;
  constructor(public dialog: MatDialog, public firebase:FirebasedataService) {
    firebase.usercontacts$.subscribe((data)=>{
      this.userList = data
      console.log(this.userList)
    })
    firebase.currentUserData$.subscribe(data=>{
      this.userDetail = data;
      Object.keys(data).length === 0 ? this.detail = false : this.detail = true;
      console.log(data)
      console.log(this.userDetail)
    })
   }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogAddContactComponent, {
      width: '250px',
    });
  }

  
}


