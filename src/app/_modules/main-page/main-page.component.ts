import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';

interface Item {
  name: string,
 
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  helpPage: boolean = false;
  constructor(firestore: FirebasedataService){
    firestore.userdata$.subscribe((data)=>{
      console.log('DB_USERDATA',data)
    });
    firestore.userlist$.subscribe((data)=>{
      console.log('DB_USERLIST',data)
    })

  }
 
  ngOnInit(): void {
  }
  
  
}
