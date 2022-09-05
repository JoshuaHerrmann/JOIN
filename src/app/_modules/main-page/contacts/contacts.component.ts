import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  detail: boolean = true;
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N' ,'O', 'P' ,'Q', 'R', 'S', 'T' ,'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor() { }

  ngOnInit(): void {
  }

}
