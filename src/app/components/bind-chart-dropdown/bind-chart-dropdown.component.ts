import { Component, OnInit } from '@angular/core';
import { BindChartService } from 'src/app/services/bind-chart.service';

@Component({
  selector: 'app-bind-chart-dropdown',
  templateUrl: './bind-chart-dropdown.component.html',
  styleUrls: ['./bind-chart-dropdown.component.css']
})
export class BindChartDropdownComponent implements OnInit {
  chartData: Array<any>;
  constructor(private chartService: BindChartService) { }

  ngOnInit(): void {
    this.chartService.getChartTypes().subscribe(r=> {
        this.chartData = r as Array<any>;
    });
  }
  onSelectionChange(event){
      alert(event.target.options[event.target.options.selectedIndex].text);
  }

  getSelectedValue(){
    var e = (document.getElementById("mySelect")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurValue = (<HTMLSelectElement><unknown>opt);
    alert(CurValue['text']);
  }
}
