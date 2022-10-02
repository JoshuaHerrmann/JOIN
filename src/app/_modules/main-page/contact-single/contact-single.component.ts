import { Component, Input, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-contact-single',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.scss']
})
export class ContactSingleComponent implements OnInit {
  @Input() data:any;
  constructor(public firebase:FirebasedataService) {
   
   }
  
  ngOnInit(): void {
  }

  getShorthand(){
   let first = this.data['firstname'].split("", 1)
   let last = this.data['lastname'].split("", 1)
   return last + first
  }

  updateUserData(){
    this.firebase.nextUserData(this.data)
  }
}
