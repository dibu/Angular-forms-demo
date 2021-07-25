import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BindChartService {

  constructor(private httpClient: HttpClient) { }

  getChartTypes(){
    return this.httpClient.get('http://localhost:31243/api/TeamMatrix/GetChartData');
  }
}
