export class Task {
        title: string;
        finishDate: number;
        category: string;
        priority: string;
        state:string;
        description:string;
        subtasks: string[];
        assignedTo: Array<any>;


        constructor(obj?: any){
            this.title = obj ? obj.title : '';
            this.finishDate = obj ? obj.finishDate : new Date().getTime();
            this.category = obj ? obj.category : '';
            this.priority = obj ? obj.priority : '';
            this.state = obj ? obj.state : 'todo'; // by default todo, when created in board state can change
            this.description = obj ? obj.description : '';
            this.subtasks = obj ? obj.subtasks : [];
            this.assignedTo = obj ? obj.assignedTo : [];
        }

       public toJson(){
        return {
        title: this.title,
        finishDate: this.finishDate,
        category: this.category,
        priority: this.priority,
        state: this.state,
        description: this.description,
        subtasks: this.subtasks,
        assignedTo: this.assignedTo}}
}
