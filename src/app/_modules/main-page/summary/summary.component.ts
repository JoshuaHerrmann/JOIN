import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { States } from 'src/app/models/states.class';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  userData:Array<any>=[];
  states= new States();
  upcomingDate: string;
  userPersonalData:any;

  constructor(public firebase: FirebasedataService, private auth: AuthenticationService) { 
   
    
  }

  ngOnInit(): void {
    this.getUserData()
    this.getUserPersonalData()
  }


  getUserData(){
      this.firebase.userdata$.subscribe((dataDB)=>{
        this.userData = [];
        dataDB.forEach(data => {
          this.userData.push({
            'task':data.payload.doc.data(),
          'taskid':data.payload.doc.id
          })
        })
      this.filterData()
    })
  }


  getUserPersonalData(){
    this.firebase.userlist$.subscribe(data=>{
      this.userPersonalData = data
    })
  }

  /**
   * to avoid getting error messages because html cant find 'firstname' bevor its updated via subscribe
   * @returns returns the users first name
   */
  returnFirstname(){
   return this.userPersonalData? this.userPersonalData['firstname']: 'You'
  }
 

  filterData(){
    this.states.resetData();
    this.filterForAmount();
    this.filterForDate();
  }


  filterForDate(){
    let dates = [];
    this.userData.forEach(task=>{
      dates.push(task['task'].finishDate)
    })
    dates.sort((a,b)=>{
      return a - b
    })
    this.upcomingDate = this.formatDate(new Date(dates[0]))
  }


  filterForAmount(){
    this.userData.forEach( task=> {
      task['task'].state === 'todo'? this.states['todo']++ :
      task['task'].state === 'progress'? this.states['progress']++ :
      task['task'].state === 'feedback'? this.states['feedback']++ :
      task['task'].state === 'done'? this.states['done']++ : null;
      task['task'].priority === 'urgent'? this.states['urgent']++:null;
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
