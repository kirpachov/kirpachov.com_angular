import { Component } from '@angular/core';
import { ButtonArrowComponent } from '../button-arrow/button-arrow.component';

@Component({
  selector: 'button[secondaryButtonArrow], a[secondaryButtonArrow]',
  templateUrl: '../button-arrow/button-arrow.component.html',
  styleUrls: [
    '../button-arrow/button-arrow.component.scss',
    './secondary-button-arrow.component.scss'
  ],
})
export class SecondaryButtonArrowComponent  extends ButtonArrowComponent {

}
