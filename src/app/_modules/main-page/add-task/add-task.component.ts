import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  
  
  constructor() { }

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
}
