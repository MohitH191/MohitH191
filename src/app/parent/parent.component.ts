import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MyService } from '../my.service';  // Adjusted import statement

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {
  numberData: number = 0;
  objectData = { value: 'Initial Object Data' };

  constructor(private myService: MyService) {}  // Adjusted service injection

  updatePrimitive() {
    this.numberData++;
  }

  updateNonPrimitive() {
    this.objectData.value = 'Updated Object Data';
  }

  getServiceData(): string {
    return this.myService.getData();
  }
}
