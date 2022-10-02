export class Contact{
        uid: string;
        firstname: string;
        lastname: string;
        email:string;
        phone:number;

        constructor(obj?:any){
            this.uid = obj ? obj : '';
            this.firstname = obj ? obj : '';
            this.lastname = obj ? obj : '';
            this.email = obj ? obj : '';
            this.phone = obj ? obj : null;
        }

        public returnToJson(){
            return{
                uid : this.uid != '' ? this.uid : 'noid',
                firstname: this.firstname != '' ? this.firstname : 'Firstname',
                lastname: this.lastname != '' ? this.lastname : 'Lastname',
                email: this.email != '' ? this.email : 'Invalid Email',
                phone: this.phone !=  null ? this.phone : 1919191919,
            }
        }
}