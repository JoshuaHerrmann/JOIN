import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-UX-created-task',
  templateUrl: './created-task.component.html',
  styleUrls: ['./created-task.component.scss']
})
export class CreatedTaskComponent implements OnInit {
  isActive:boolean = false;
  appear:boolean = false;
  disappear:boolean = false;
  constructor(public firebase: FirebasedataService) { }

  ngOnInit(): void {
    this.firebase.currentUserFeedBack$.subscribe(active =>{
      active === 'createdTask' ? (this.isActive = true, this.appear = true): this.isActive = false;
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
