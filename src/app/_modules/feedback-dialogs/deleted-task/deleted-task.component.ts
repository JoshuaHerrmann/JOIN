import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-UX-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.scss']
})
export class DeletedTaskComponent implements OnInit {
  isActive:boolean = false;
  appear:boolean = false;
  disappear:boolean = false;
  constructor(public firebase: FirebasedataService) { }

  ngOnInit(): void {
    this.firebase.currentUserFeedBack$.subscribe(active =>{
      active === 'deletedTask' ? (this.isActive = true, this.appear = true) : this.isActive = false;
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
