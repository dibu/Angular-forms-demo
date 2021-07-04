import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceUrl} from '../constants/service-url.model';
import { MockUser } from '../model/mock-user.class';

@Injectable({
  providedIn: 'root'
})
export class MockUserTodoService {

  constructor(private http: HttpClient) { 
  }

  getMockUserList(){
     return this.http.get(ServiceUrl['jsonplaceholder-userList-url'])
  }

  getMockUserTodoList(){
    return this.http.get(ServiceUrl['jsonplaceholder-todo-url']);
  }

}
