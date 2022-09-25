import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoardCardComponent } from '../dialog-board-card/dialog-board-card.component';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})


export class BoardCardComponent implements OnInit {
  @Input() taskdata = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogBoardCardComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.taskdata
    })
  }
}
