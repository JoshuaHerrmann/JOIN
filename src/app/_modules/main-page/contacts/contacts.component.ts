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
  filteredUserList: Array<object> = [];
  
  userList: Array<any> = [];
  userDetail:any;
  constructor(public dialog: MatDialog, public firebase:FirebasedataService) {
    firebase.usercontacts$.subscribe((data)=>{
      this.userList = data
      console.log(this.userList)
      this.filterUserlist()
    })
    firebase.currentUserData$.subscribe(data=>{
      this.userDetail = data;
      Object.keys(data).length === 0 ? this.detail = false : this.detail = true;
    })
    
   }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogAddContactComponent, {
      width: '250px',
    });
  }


  
  filterUserlist(){
    let set = new Set();
  this.userList.forEach(contact =>{
    set.add(contact['lastname'].slice("",1));
   })
   set.forEach(entry=>{
    this.filteredUserList.push({letter: entry, contacts:[]})
   })
   console.warn(this.filteredUserList)
   this.userList.forEach((contact)=>{
    this.filteredUserList.forEach((letter, indexLetter) => {
      if(contact['lastname'].slice("",1) === letter['letter']){
        this.filteredUserList[indexLetter]['contacts'].push(contact)
      }
    });
    
   })
   console.warn(set)
   
  }  
}


