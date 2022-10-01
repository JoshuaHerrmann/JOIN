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
    return 'JH'
  }

  updateUserData(){
    this.firebase.nextUserData(this.data)
  }
}
