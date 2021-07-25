import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chechbox-assign-role',
  templateUrl: './chechbox-assign-role.component.html',
  styleUrls: ['./chechbox-assign-role.component.css']
})
export class ChechboxAssignRoleComponent implements OnInit {

  constructor() { }
  services : Array<any>;
  outputServices : Array<number>;
  buttonStatus : boolean=true;
  ngOnInit(): void {
    this.services=[{
      "serviceId" : 1,
      "serviceName":"service name 1",
      "isAssigned" : false
    },
    {
      "serviceId" : 2,
      "serviceName":"service name 2",
      "isAssigned" : false
    },
    {
      "serviceId" : 3,
      "serviceName":"service name 3",
      "isAssigned" : false
    },
    {
      "serviceId" : 4,
      "serviceName":"service name 4",
      "isAssigned" : false
    },
    {
      "serviceId" : 5,
      "serviceName":"service name 5",
      "isAssigned" : false
    }
    ];
      setInterval(function(){
        if(this.buttonStatus)
           this.buttonStatus=false;
        else
          this.buttonStatus=true;

      },1000);
  }

  checkChange(){
    this.outputServices=[];
    for(var i=0; i< this.services.length;i++){
      if(this.services[i].isAssigned){
        this.outputServices.push(this.services[i].serviceId);
      }
    }
    console.log(JSON.stringify(this.outputServices,null,3));
  }

  toggleButton (){
   if(this.buttonStatus)
    this.buttonStatus=false;
   else
    this.buttonStatus=true;
  }
}


