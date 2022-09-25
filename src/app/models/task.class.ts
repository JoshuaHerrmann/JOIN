export class Task {
        title: string;
        finishDate: Date;
        category: string;
        priority: string;
        state:string;
        description:string;
        subtasks: string[];
        assignedTo: Array<any>;


        constructor(obj?: any){
            this.title = obj ? obj.title : '';
            this.finishDate = obj ? obj.finishDate : new Date();
            this.category = obj ? obj.category : '';
            this.priority = obj ? obj.priority : '';
            this.state = 'todo'; // todo, progress, feedback, done
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
