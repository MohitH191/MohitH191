import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available at the root level
})
export class MyService {
  private data: string = 'Service Data';

  getData(): string {
    return this.data;
  }

  setData(newData: string): void {
    this.data = newData;
  }
}