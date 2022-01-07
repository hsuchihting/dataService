import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  _dataPass = [];

  get getData() {
    return this._dataPass;
  }

  set setData(val: any) {
    this._dataPass = val;
  }
}
