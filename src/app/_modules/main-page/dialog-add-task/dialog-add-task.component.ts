import { Component, Inject, OnInit } from '@angular/core';;
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
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

    constructor(public firebase:FirebasedataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef : MatDialogRef<DialogAddTaskComponent>) {
      this.task.state = data;
      let contactList = []
    firebase.usercontacts$.subscribe(data=>{
      data.forEach(contact=>{
        contactList.push({'firstname':contact['firstname'],'lastname':contact['lastname'],'uid':contact['uid']})
      })
      this.contactsList = contactList
    })
     }
  
    ngOnInit(): void {
    }
    contacts = new FormControl('');
  
    contactsList: string[] = [];
    categoryList: category[] = [
      {value: 'Desing', viewValue: 'Design'},
      {value: 'Media', viewValue: 'Media'},
      {value: 'Sales', viewValue: 'Sales'},
      {value: 'Backoffice', viewValue: 'Backoffice'},
      {value: 'Marketing', viewValue: 'Marketing'},
    ];
  
    priority: string = 'none'
    subtask: string = ''
    date: Date;
    allSubTasks: Array<any> = []
    task = new Task();
   //
   assignedContacts$:Array<any>= [];
  
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
    }
  
    selecteContacts(contacts:any){
      this.task.assignedTo = contacts; // ggf object erstellen je nach dem welche daten ich brauche
    }
  
    selecteCategory(category:any){
      this.task.category = category.value;
    }
  // DEBUGG FUNCTION
    logsub(){console.log(this.task)}
  }

