import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  dataPass = new Subject();
  constructor() {}

  setData(val: any) {
    this.dataPass.next(val);
  }

  getData() {
    return this.dataPass.asObservable();
  }
}
