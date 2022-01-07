import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  family = [];
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._apiService.data().subscribe((res) => {
      this.family = res;
      console.log(res);
    });
  }
}
