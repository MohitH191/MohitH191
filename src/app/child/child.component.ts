import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MyService } from '../my.service';  // Adjusted import statement

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() numberData!: number;
  @Input() objectData!: { value: string };
  childData: string = 'Initial Child Data';

  constructor(private myService: MyService) {}  // Adjusted service injection

  updateChildData() {
    this.childData = 'Updated Child Data';
  }

  getServiceData(): string {
    return this.myService.getData();
  }
}
