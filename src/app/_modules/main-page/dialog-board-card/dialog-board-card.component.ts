import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MainPageComponent } from '../main-page.component';

@Component({
  selector: 'app-dialog-board-card',
  templateUrl: './dialog-board-card.component.html',
  styleUrls: ['./dialog-board-card.component.scss']
})
export class DialogBoardCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainPageComponent>) { }

  ngOnInit(): void {
  }

}
