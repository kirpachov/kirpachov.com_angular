import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiScrollService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {

  @Output() nextSection: EventEmitter<void> = new EventEmitter<void>();

}
