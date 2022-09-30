import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  legalNoticeActice: boolean = true;
  constructor(private router: Router) { 
    router.events.subscribe((url)=>{
      if(url instanceof NavigationEnd){
        console.log(url)
        if(url['url'] == '/main/legal-notice'){
          this.legalNoticeActice = true;
        }else{
          this.legalNoticeActice = false;
        }
        console.log(this.legalNoticeActice)
      }
      
    })
  }

  ngOnInit(): void {
  }

}
