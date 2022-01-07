import { DataServiceService } from './../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  family = [];
  constructor(
    private _apiService: ApiService,
    private _dataSvc: DataServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._apiService.data().subscribe((res) => {
      this.family = res;
      console.log(res);
    });
  }

  click() {
    this._dataSvc.setData(this.family);
    this._router.navigate(['/second']);
  }
}
