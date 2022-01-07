import { DataServiceService } from './../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  getFirstData: any[] = [];
  constructor(private _datSvc: DataServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getFirstData = this._datSvc.getData;
  }
}
