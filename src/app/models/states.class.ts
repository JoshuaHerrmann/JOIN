export class States {
    todo: number;
    progress: number;
    feedback: number;
    done:number;
    allTasks:number;
    urgent:number;
    constructor(){
        this.todo = 0;
        this.progress = 0;
        this.feedback = 0;
        this.done = 0;
        this.allTasks = 0;
        this.urgent = 0;
    }

    resetData(){
        this.todo = 0;
        this.progress = 0;
        this.feedback = 0;
        this.done = 0;
        this.allTasks = 0;
        this.urgent = 0;
    }
}