import { DataServiceService } from './../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private _datSvc: DataServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._datSvc.getData().subscribe((res) => {
      console.log(res);
    });
  }
}
