export class Contact{
        uid: string;
        firstname: string;
        lastname: string;
        email:string;
        phone:number;

        constructor(obj?:any){
            this.uid = obj ? obj.uid : '';
            this.firstname = obj ? obj.firstname : '';
            this.lastname = obj ? obj.lastname : '';
            this.email = obj ? obj.email : '';
            this.phone = obj ? obj.phone : null;
        }

        public returnToJson(){
            return{
                uid : this.uid != '' ? this.uid : 'noid',
                firstname: this.firstname != '' ? this.firstLetterUp(this.firstname) : 'Firstname',
                lastname: this.lastname != '' ? this.firstLetterUp(this.lastname) : 'Lastname',
                email: this.email != '' ? this.email : 'Invalid Email',
                phone: this.phone !=  null ? this.phone : 0,
            }
        }

        private firstLetterUp(name){
                let firstLetterCapital = name.charAt(0).toLocaleUpperCase() + name.slice(1)
                return firstLetterCapital 
        }
}