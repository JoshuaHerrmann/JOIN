import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { Contact } from 'src/app/models/contact.class';

@Component({
  selector: 'app-dialog-add-contact',
  templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss']
})
export class DialogAddContactComponent implements OnInit {
  contact= new Contact()
  constructor(public firebase: FirebasedataService) { }

  ngOnInit(): void {
  }

  tetsts(){
    console.log(this.contact.returnToJson())
  }

}
