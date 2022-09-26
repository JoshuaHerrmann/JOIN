import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { Task } from 'src/app/models/task.class';

interface category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  firestore: any
  constructor(firestore:FirebasedataService) {
    this.firestore = firestore
   }

  ngOnInit(): void {
  }
  contacts = new FormControl('');

  contactsList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  categoryList: category[] = [
    {value: 'Desing', viewValue: 'Design'},
    {value: 'Media', viewValue: 'Media'},
    {value: 'Sales', viewValue: 'Sales'},
    {value: 'Backoffice', viewValue: 'Backoffice'},
    {value: 'Marketing', viewValue: 'Marketing'},
  ];

  priority: string = 'none';
  subtask: string = '';
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
    this.firestore.addTaskToDB(this.task.toJson())
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