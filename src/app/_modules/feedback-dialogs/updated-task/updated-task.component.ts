import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-UX-updated-task',
  templateUrl: './updated-task.component.html',
  styleUrls: ['./updated-task.component.scss']
})
export class UpdatedTaskComponent implements OnInit {

  isActive:boolean = false;
  appear:boolean = false;
  disappear:boolean = false;
  constructor(public firebase: FirebasedataService) { }

  ngOnInit(): void {
    this.firebase.currentUserFeedBack$.subscribe(active =>{
      active === 'updatedTask' ? (this.isActive = true, this.appear = true) : this.isActive = false;
      setTimeout(() => {
        this.appear = false
        this.disappear = true
      }, 3000);
      setTimeout(() => {
        this.isActive = false
        this.disappear = false
      }, 5000);
    })
  } 
}
