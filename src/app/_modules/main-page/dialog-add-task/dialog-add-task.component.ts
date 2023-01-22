import { Component, Inject, OnInit } from '@angular/core';;
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';

interface category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {
    constructor(public firebase:FirebasedataService, @Inject(MAT_DIALOG_DATA) public inputData: any, public dialogRef : MatDialogRef<DialogAddTaskComponent>) {
      if(typeof this.inputData == 'string'){
        this.task.state = this.inputData;
      }else{
        console.log(this.inputData)
        this.preSelectedContact = this.inputData['contactId']
        this.contacts = new FormControl([this.preSelectedContact]) // has to be an array to pass into formcontrol, cuz the mat-selection is on multiple
        this.task.assignedTo = [this.inputData['contact']]
      }
      
     }
  
    ngOnInit(): void {
      this.firebase.usercontacts$.subscribe((dataDB)=>{
        this.contactList = []
        dataDB.forEach(data=>{
          this.contactList.push({
            'contact': data.payload.doc.data(),
            'contactId': data.payload.doc.id
          })
        })
        console.log('Userlist', this.contactList)
      })
      this.currentPriority$.subscribe(value=>{
        this.selectedPriority = value;
      })
    }
    contacts = new FormControl();
  
    contactList: Array<any> = [];
    categoryList: category[] = [
      {value: 'Desing', viewValue: 'Design'},
      {value: 'Media', viewValue: 'Media'},
      {value: 'Sales', viewValue: 'Sales'},
      {value: 'Backoffice', viewValue: 'Backoffice'},
      {value: 'Marketing', viewValue: 'Marketing'},
    ];
    private priority$ = new BehaviorSubject<string>('')
    currentPriority$ = this.priority$.asObservable()
    selectedPriority:string;

    //
    priority: string = 'none'
    subtask: string = ''
    date: Date;
    allSubTasks: Array<any> = []
    task = new Task();
    contactListValue:any;
    categoryListValue:any;
    emptySubtask:boolean;
   //
   assignedContacts$:Array<any>= [];
   preSelectedContact:any;


    addTaskToDB(){
    if(this.task.priority === ''){
      alert('Please add a priority! (Urgent, Medium, Low)');
      return
    }
    this.allSubTasks.forEach(subtask => {
      subtask.checked === true?this.task.subtasks.push(subtask.task):null;});
    this.task.finishDate = this.date.getTime()
    this.firebase.addTaskToDB(this.task.toJson())
    this.dialogRef.close()
    }
  
    addSubTask(){
      if(this.subtask === ''){ 
        alert('Please enter a text to your Subtask!');
        return}
      this.allSubTasks.push({'task': this.subtask, 'checked': true})
      this.subtask = '';
    }
  
  
    deleteSubtask(index:number){
      this.allSubTasks.splice(index, 1);
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
  

    selecteCategory(category:any){
      this.task.category = category.value;
    }


    clearAll(){
      this.task = new Task();
      this.priority$.next('none');
      this.allSubTasks = [];
      this.date = undefined;
      this.contactListValue = undefined;
      this.categoryList = undefined;
    }
  // DEBUGG FUNCTION
    logsub(){console.log(this.task)}
  }

