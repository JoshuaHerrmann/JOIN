import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MainPageComponent } from '../main-page.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-board-card',
  templateUrl: './dialog-board-card.component.html',
  styleUrls: ['./dialog-board-card.component.scss']
})

export class DialogBoardCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainPageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {   }
  ngOnInit(): void {}
}
