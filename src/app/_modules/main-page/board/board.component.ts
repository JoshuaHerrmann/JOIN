import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebasedataService } from 'src/app/firebasedata/firebasedata.service';
import { Task } from 'src/app/models/task.class';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  allUsersTasks: Array<any> = [];
  allUsersTasksId:Array<any> = [];
  Tasks_todo: Array<any> = [];
  Tasks_progress: Array<any> = [];
  Tasks_feedback: Array<any> = [];
  Tasks_done: Array<any> = [];
  searchField:string;

  constructor(public dialog: MatDialog, public firebase: FirebasedataService) {
    firebase.userdata$.subscribe((dataDB)=>{
      dataDB.forEach(data => {
        let rawTask =  data.payload.doc.data();
        let taskId= data.payload.doc.id;
        this.allUsersTasks.push({
          'task':rawTask,
          'taskid':taskId
        })
      })
      this.filterTaskState()
      console.log('allUserTasks in board',this.allUsersTasks)
      console.table([this.Tasks_todo, this.Tasks_feedback,this.Tasks_progress,this.Tasks_done])
    })
   }

  ngOnInit(): void {
    
    document.getElementById('searchField').addEventListener('keyup', (e)=>{
      this.searchTask()
    })
  }

  filterTaskState(){
    this.resetArrays()
    this.allUsersTasks.forEach(task => {
      task['task'].state === 'todo'? this.Tasks_todo.push(task):
      task['task'].state === 'progress'? this.Tasks_progress.push(task):
      task['task'].state === 'feedback'? this.Tasks_feedback.push(task):
      task['task'].state === 'done'? this.Tasks_done.push(task): null;  
    });
  }
  filterTaskStateSearch(mappedArray){
    this.resetArrays()
    mappedArray.forEach(task => {
      if(task){
        task.state === 'todo'? this.Tasks_todo.push(task):
        task.state === 'progress'? this.Tasks_progress.push(task):
        task.state === 'feedback'? this.Tasks_feedback.push(task):
        task.state === 'done'? this.Tasks_done.push(task): null;  
      }else{
        return
      }
      
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


  searchTask(){
    let map =
    this.allUsersTasks.map(task =>{
      if(task['title'].toLocaleUpperCase().startsWith(this.searchField.toLocaleUpperCase())){
        return task
      }else{
        return null
      }
    })
    this.filterTaskStateSearch(map)
  }


  logfunc(){
    console.log('filtertasks in board',this.Tasks_done, this.Tasks_feedback,this.Tasks_progress,this.Tasks_done)
  }
}
