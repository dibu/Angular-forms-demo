import { Component, OnInit } from '@angular/core';
import { MockUserTodo } from 'src/app/model/mock-user-todo.class';
import { MockUser } from 'src/app/model/mock-user.class';
import { MockUserTodoService } from 'src/app/services/mock-user-todo.service';

@Component({
  selector: 'app-nested-dropdown',
  templateUrl: './nested-dropdown.component.html',
  styleUrls: ['./nested-dropdown.component.css']
})
export class NestedDropdownComponent implements OnInit {

  mockuserList : Array<MockUser>
  mockuserTodoList : Array<MockUserTodo>
  constructor(private mockService : MockUserTodoService) { }

  ngOnInit(): void {
    this.mockService.getMockUserList().subscribe(user => {
      this.mockuserList = user as any;
    //  console.log(JSON.stringify( this.mockuserList,null,3));
    });
  }
  onSelectionChange(userId){
      this.mockService.getMockUserTodoList().subscribe(res => {
      let todoList : Array<MockUserTodo> = res as any;
      this.mockuserTodoList = todoList.filter(todo=> todo.userId == userId)
      //console.log(JSON.stringify( this.mockuserTodoList,null,3));
    });
 }
}
