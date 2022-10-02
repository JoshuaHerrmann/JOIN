import { Component, Input, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }
  getShorthand(){
    let firstname = this.data['firstname'].slice("",1)
    let lastname = this.data['lastname'].slice("",1)
    return lastname + firstname
  }
}
