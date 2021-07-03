import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../model/user-model.model';
import {ServiceUrl} from '../constants/service-url.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient : HttpClient) { }
  
  getUserDetails(){
     return this.httpClient.get(ServiceUrl.userListUrl);
  }

}
