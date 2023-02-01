import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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
  constructor(public firebase:FirebasedataService, ) {
    firebase.usercontacts$.subscribe((dataDB)=>{
      dataDB.forEach(data=>{
        this.userList.push({
          'contact':data.payload.doc.data(),
          'contactId':data.payload.doc.id
        })
      })
      this.updateContactList()
    })
   }

  ngOnInit(): void {
    this.currentPriority$.subscribe(value=>{
      this.selectedPriority = value;
    })
  }
  contacts = new FormControl('');
  userList: Array<any> = [];
  contactsList: any[] = [];
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
  
  notCompleted:boolean = false;
  priority: string = 'none';
  subtask: string = '';
  date: Date;
  allSubTasks: Array<any> = []
  task = new Task();
  contactListValue:any;
  categoryListValue:any;
  emptySubtask:boolean;
 //
  assignedContacts$:Array<any>= [];
 
  addTaskToDB(){
    if(this.checkForEmptyFields()){
    this.allSubTasks.forEach(subtask => {
      subtask.checked === true?this.task.subtasks.push(subtask.task):null;});
    this.task.finishDate = this.date.getTime()
    this.firebase.addTaskToDB(this.task.toJson())
    this.notCompleted = false;
    }
  }


  checkForEmptyFields(){
    if(this.task.title === '' || this.task.category === '' || this.task.priority === ''){
       this.notCompleted = true
       return false
    }else{
      return true
    }
  }
 

  addSubTask(){
    if(this.subtask === ''){ 
      this.emptySubtask = true;
      return}
    this.allSubTasks.push({'task': this.subtask, 'checked': true})
    this.subtask = '';
    this.emptySubtask = false;
  }


  updateContactList(){
    let contactList = [];
    this.userList.forEach(contact=>{
    contactList.push({'firstname':contact['contact']['firstname'],'lastname':contact['contact']['lastname'],'uid':contact['contact']['uid']})
    })
    this.contactsList = contactList
  }


  deleteSubtask(index:number){
    this.allSubTasks.splice(index, 1);
  }

  priorityValue(value:string){
    this.task.priority = value;
    this.priority$.next(value)
  }

  selecteContacts(contacts:any){
    this.task.assignedTo = contacts; // ggf object erstellen je nach dem welche daten ich brauche
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
}