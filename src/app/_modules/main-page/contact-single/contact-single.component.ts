import { AbstractType, Component, Input, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-contact-single',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.scss']
})
export class ContactSingleComponent implements OnInit {
  @Input() data:any;
  rawContact:any;
  randomColor:any;
  shorthand:string;
  constructor(public firebase:FirebasedataService) {

   }
  
  ngOnInit(): void {
    this.rawContact = this.data['contact']
    this.getRandomColor()
    this.shorthand = this.getShorthand()
  }

  getShorthand(){
   let first = this.rawContact['firstname'].split("", 1)
   let last = this.rawContact['lastname'].split("", 1)
   return last + first
  }

  updateUserData(){
    console.log(this.rawContact)
    this.firebase.nextUserData(this.rawContact)
  }


  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    this.randomColor = '#' + ('000000' + color).slice(-6);
  }

}
