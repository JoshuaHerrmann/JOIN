import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';

@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss']
})
export class DialogEditContactComponent implements OnInit {

  constructor(public firebase: FirebasedataService) { }

  ngOnInit(): void {
  }

}
