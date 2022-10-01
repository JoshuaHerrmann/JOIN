export class Contact{
        uid: string;
        name: string;
        email:string;
        phone:number;

        constructor(obj?:any){
            this.uid = obj ? obj : '';
            this.name = obj ? obj : '';
            this.email = obj ? obj : '';
            this.phone = obj ? obj : null;
        }

        public returnToJson(){
            return{
                uid : this.uid != '' ? this.uid : 'noid',
                name: this.name != '' ? this.name : 'Invalid Name',
                email: this.email != '' ? this.email : 'Invalid Email',
                phone: this.phone !=  null ? this.phone : 1919191919,
            }
        }
}