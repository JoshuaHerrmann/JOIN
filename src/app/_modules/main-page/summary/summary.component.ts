import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { States } from 'src/app/models/states.class';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  userData: any;
  states= new States();
  upcomingDate: string;
  constructor(public firebase: FirebasedataService) { 
    this.firebase.userdata$.subscribe((data)=>{
      this.userData = data
      this.filterData()
      console.log(this.userData)
    })
  }

  ngOnInit(): void {
  }

  filterData(){
    this.states.resetData();
    this.filterForAmount();
    this.filterForDate();
  }
  filterForDate(){
    let dates = [];
    this.userData.forEach(task=>{
      dates.push(task.finishDate)
    })
    dates.sort((a,b)=>{
      return a - b
    })
    this.upcomingDate = this.formatDate(new Date(dates[0]))
    console.log(dates)
    console.log(this.upcomingDate)
  }
  filterForAmount(){
    this.userData.forEach( task=> {
      task.state === 'todo'? this.states['todo']++ :
      task.state === 'progress'? this.states['progress']++ :
      task.state === 'feedback'? this.states['feedback']++ :
      task.state === 'done'? this.states['done']++ : null;
      task.priority === 'urgent'? this.states['urgent']++:null;
      this.states.allTasks = this.states.todo + this.states.progress + this.states.feedback + this.states.done;
    });
  }

  //helpfunctions for date
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}
