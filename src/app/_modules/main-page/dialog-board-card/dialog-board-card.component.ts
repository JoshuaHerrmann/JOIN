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
    this.task = new Task(this.data)
  }

  
  editing: boolean = false;

  private priority$ = new BehaviorSubject<string>('')
  currentPriority$ = this.priority$.asObservable()
  selectedPriority:string;
  priority: string = 'none';

  date: Date;
  contacts = new FormControl('');
  contactsList: string[] = [];
  contactListValue:any;
  task:Task;

  

  //


  editMode(){
    this.editing = true ? this.editing === false : this.editing = false;
    console.log(this.task)
  }


  priorityValue(value:string){
    //this.task.priority = value;
    this.priority$.next(value)
  }


  selecteContacts(contacts:any){
    //this.task.assignedTo = contacts; // ggf object erstellen je nach dem welche daten ich brauche
  }

  addTaskToDB(){
    if(this.task.priority === ''){
      alert('Please add a priority! (Urgent, Medium, Low)');
      return
    }
    //this.allSubTasks.forEach(subtask => {
    //  subtask.checked === true?this.task.subtasks.push(subtask.task):null;});
    this.task.finishDate = this.date.getTime()
    this.firebase.addTaskToDB(this.task.toJson())
    this.dialogRef.close()
  }
}
