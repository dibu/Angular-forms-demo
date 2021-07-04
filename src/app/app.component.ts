import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user-service.service';
import { UserModel } from './model/user-model.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms-demo';
  
  userList: Array<UserModel>;
 constructor(private userService : UserService){}
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(r=> {
      this.userList = r['data'] as Array<UserModel>;
     // console.log('UserList :' + JSON.stringify(this.userList,null,3));
    })
  }
}
