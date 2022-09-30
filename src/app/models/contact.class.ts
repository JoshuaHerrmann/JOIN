export class Contact{
        uid: string;
        name: string;
        email:string;
        phone:number;

        constructor(obj?:any){
            this.uid = obj ? obj : 'ot2eEvfgnnM6cTsIUoWwRuLIPPk2';
            this.name = obj ? obj : 'guest account';
            this.email = obj ? obj : 'testmail@test.de';
            this.phone = obj ? obj : '0123456789';
        }

        public returnToJson(){
            return{
                uid : this.uid,
                name: this.name,
                email: this.email,
                phone: this.phone
            }
        }
}