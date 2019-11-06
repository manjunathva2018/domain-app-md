import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private totalDomain:any=[];
  constructor() { }

  ngOnInit() {
    this.totalDomain=[{name:"Banking"},{name:"HR"},{name:"Sales"},{name:"Management"},{name:"Hospital"},{name:"Hotel"}];
  }

}
