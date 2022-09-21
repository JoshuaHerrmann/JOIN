import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  userlist:any={
    'users':[
      {'userName': 'Max Mustermann',
      'email': 'testmail@web.de',
      'shortHandName': 'MM',
      'userId': 'userId1'}
    ]
  }



  userData:any ={
    'contacts': [
      {
        'userName': 'Max Mustermann',
        'email': 'testmail@web.de',
        'shortHandName': 'MM',
        'userId': 'userId1'
      },
      {'userName': 'Max Musterfrau',
      'email': 'testmail2@web.de',
      'shortHandName': 'MF',
      'userId': 'userId2'}
    ],
    'tasks': [
      {'title': 'Titel',
       'finishDate': '1234567',  //timestamp 
        'category': 'desgin',
        'priority': 'urgent',
        'state': 'inProgress',
        'description': 'description',
        'subtasks': [
                    {'subtask1': 'subtask1'},
        ],
        'assignedTo': [
                {'userId': 'userId'},
        ]
      },
      {'title': 'Titel2',
      'finishDate': '7654321',  //timestamp 
       'category': 'desgin2',
       'priority': 'urgent2',
       'state': 'inProgress2',
       'description': 'description2',
       'subtasks': [
                   {'subtask2': 'subtask2'},
       ],
       'assignedTo': [
               {'userId': 'userId'},
       ]
     }
    ]
  }
}
