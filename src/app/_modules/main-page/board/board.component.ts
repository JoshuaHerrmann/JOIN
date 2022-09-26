import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  allUsersTasks: Array<any> = [];
  Tasks_todo: Array<any> = [];
  Tasks_progress: Array<any> = [];
  Tasks_feedback: Array<any> = [];
  Tasks_done: Array<any> = [];
  constructor(public dialog: MatDialog, public tasksDB: FirebasedataService) {
    tasksDB.userdata$.subscribe((data)=>{
      this.allUsersTasks = data;
      this.filterTaskState()
      console.log('allUserTasks in board',this.allUsersTasks)
      console.table([this.Tasks_todo, this.Tasks_feedback,this.Tasks_progress,this.Tasks_done])
    })
   }

  ngOnInit(): void {
  }

  filterTaskState(){
    this.resetArrays()
    this.allUsersTasks.forEach(task => {
      task.state === 'todo'? this.Tasks_todo.push(task):
      task.state === 'progress'? this.Tasks_progress.push(task):
      task.state === 'feedback'? this.Tasks_feedback.push(task):
      task.state === 'done'? this.Tasks_done.push(task): null;  
    });
  }

  resetArrays(){
    this.Tasks_todo = [];
    this.Tasks_feedback = [];
    this.Tasks_progress = [];
    this.Tasks_done = [];
  }
  // open dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, state: string): void {
    this.dialog.open(DialogAddTaskComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: state,
    })
  }

  logfunc(){
    console.log('filtertasks in board',this.Tasks_done, this.Tasks_feedback,this.Tasks_progress,this.Tasks_done)
  }
}
