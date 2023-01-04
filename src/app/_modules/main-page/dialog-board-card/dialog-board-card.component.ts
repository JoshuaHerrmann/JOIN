import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MainPageComponent } from '../main-page.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task.class';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
@Component({
  selector: 'app-dialog-board-card',
  templateUrl: './dialog-board-card.component.html',
  styleUrls: ['./dialog-board-card.component.scss']
})

export class DialogBoardCardComponent implements OnInit {

  

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<MainPageComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public firebase:FirebasedataService) { 
    let contactList = []
    firebase.usercontacts$.subscribe(data=>{
      data.forEach(contact=>{
        contactList.push({'firstname':contact['firstname'],'lastname':contact['lastname'],'uid':contact['uid']})
      })
      this.contactsList = contactList
    })
    }
  ngOnInit(): void {
    this.currentPriority$.subscribe(value=>{
      this.selectedPriority = value;
    })
   this.assigneData()
  }

  
  editing: boolean = false;

  private priority$ = new BehaviorSubject<string>('')
  currentPriority$ = this.priority$.asObservable()
  selectedPriority:string;
  priority: string = 'none';

  date: Date;
  calenderDate: string;
  contacts = new FormControl('');
  contactsList: string[] = [];
  contactListValue:any;
  assignedContacts: Array<any> = []
  task:Task;

  

  //
  assigneData(){
    this.task = new Task(this.data['task'])
    this.calenderDate = this.formatDate(new Date(this.task.finishDate))
    this.task.assignedTo.forEach(contact => {
      this.assignedContacts.push(contact.firstname +' ' + contact.lastname + ',')
    })
  }

  editMode(){
    this.editing = true ? this.editing === false : this.editing = false;
    this.selectedPreEdit()
    console.log(this.task)
  }

  selectedPreEdit(){
    this.priority$.next(this.task.priority)
    this.date = new Date(this.task.finishDate)
  }

  priorityValue(value:string){
    this.task.priority = value;
    this.priority$.next(value)
  }


  selecteContacts(contacts:any){
    this.task.assignedTo = contacts; // ggf object erstellen je nach dem welche daten ich brauche
  }


  updateTaskDB(){
    if(this.task.priority === ''){
      alert('Please add a priority! (Urgent, Medium, Low)');
      return
    }
    this.task.finishDate = this.date.getTime()
    this.firebase.updateTaskFromDB(this.task.toJson(),this.data.taskid)
    this.dialogRef.close()
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

  ////////////
  testtask(){
    console.log(this.task.state)
    
  }
}
