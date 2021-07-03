import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/model/user-model.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input() listOfUser : Array<UserModel>
  constructor() { }

  ngOnInit(): void {
  }

}
