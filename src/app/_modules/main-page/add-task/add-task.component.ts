import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
    {value: 'desing', viewValue: 'Design'},
    {value: 'media', viewValue: 'Media'},
    {value: 'sales', viewValue: 'Sales'},
    {value: 'backoffice', viewValue: 'Backoffice'},
    {value: 'marketing', viewValue: 'Marketing'},
  ];


  task = new Task();


  addTaskToDB(){
      console.log(this.task)
     this.firestore.addTaskToDB(this.task.toJson())
  }
}


// add entry to firebase

