import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

  @Output() nextSection: EventEmitter<void> = new EventEmitter<void>();
}
