import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ButtonArrowComponent } from '../button-arrow/button-arrow.component';

@Component({
  selector: 'button[mainButtonArrow], a[mainButtonArrow]',
  templateUrl: '../button-arrow/button-arrow.component.html',
  styleUrls: [
    '../button-arrow/button-arrow.component.scss',
    './main-button-arrow.component.scss'
  ],
})
export class MainButtonArrowComponent extends ButtonArrowComponent {
}
