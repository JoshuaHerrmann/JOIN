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
    let assignedContactsFromTask = [];
    data['task']['assignedTo'].forEach(contact=>{
      assignedContactsFromTask.push(contact['contactId'])
    })
    this.preSelectedContacts = assignedContactsFromTask
    this.contacts = new FormControl(this.preSelectedContacts)
  }

    
  ngOnInit(): void {
    this.firebase.usercontacts$.subscribe(dataDB=>{
      this.contactList = []
      dataDB.forEach(data=>{
        this.contactList.push({
          'contact':data.payload.doc.data(),
          'contactId':data.payload.doc.id
          })
      })
    })
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

  preSelectedContacts:any;
  contactList:any;
  date: Date;
  calenderDate: string;
  contacts = new FormControl('');
  contactsList: string[] = [];
  assignedContacts: Array<any> = []
  task:Task;

  
 
  //
  assigneData(){
    this.task = new Task(this.data['task'])
    this.calenderDate = this.formatDate(new Date(this.task.finishDate))
    if(this.task.assignedTo.length >= 0){
      this.task.assignedTo.forEach((contact, index) => {
        this.assignedContacts.push({
          'shortHand': this.getShorthand(index),
          'fullname':contact['contact']['firstname'] +' ' + contact['contact']['lastname']})
      })
    }
  }

  editMode(){
    this.editing = true ? this.editing === false : this.editing = false;
    this.selectedPreEdit()
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
    let assignements = []
    contacts.forEach(contact=>{
      this.contactList.forEach(contactInList=>{
        if(contactInList['contactId'] == contact){
          assignements.push(contactInList)
        }
      })
    })
    this.task.assignedTo = assignements; 
  }

  updateTaskDB(){
    if(this.task.priority === ''){
      alert('Please add a priority! (Urgent, Medium, Low)');
      return
    }
    this.task.finishDate = this.date.getTime()
    this.firebase.updateTaskFromDB(this.task.toJson(),this.data.taskid)
    this.dialogRef.close()
    //userfeedback updated task
  }


  deleteTaskDB(){
    this.firebase.deleteTaskFromDB(this.data.taskid)
    this.dialogRef.close()
    //user feedback deleted task
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


  getShorthand(index){
    let first = this.task.assignedTo[index]['contact']['firstname'].split("", 1)
    let last = this.task.assignedTo[index]['contact']['lastname'].split("", 1)
    return last + first
   }

}
