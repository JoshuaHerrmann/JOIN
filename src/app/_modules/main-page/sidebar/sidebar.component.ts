import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  legalnotice: boolean = true;
  contacts: boolean = false;
  addtask: boolean = false;
  board: boolean = false;
  summary: boolean = false;
  constructor(private router: Router) { 
    router.events.subscribe((url)=>{
      if(url instanceof NavigationEnd){
        url['url'] == '/main'? (this.summary = true, this.addtask = false, this.board = false, this.contacts = false, this.legalnotice = false) :
        url['url'] == '/main/board'? (this.summary = false, this.addtask = false, this.board = true, this.contacts = false, this.legalnotice = false):
        url['url'] == '/main/add-task'? (this.summary = false, this.addtask = true, this.board = false, this.contacts = false, this.legalnotice = false):
        url['url'] == '/main/contacts'? (this.summary = false, this.addtask = false, this.board = false, this.contacts = true, this.legalnotice = false):
        url['url'] == '/main/legal-notice'? (this.summary = false, this.addtask = false, this.board = false, this.contacts = false, this.legalnotice = true): null;
      }
      
    })
  }

  ngOnInit(): void {
  }

}
