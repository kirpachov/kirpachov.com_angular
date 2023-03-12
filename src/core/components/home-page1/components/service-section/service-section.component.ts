import { Component } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent {
  readonly steps = Array.from({ length: 5 }).map((el, index) => ({
    title: `Step ${index + 1}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis nisl.`
  }));

  get isOdd(): boolean {
    return this.steps.length % 2 !== 0;
  }

  indexize(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }
}
