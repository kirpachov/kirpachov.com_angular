import { Component } from '@angular/core';

@Component({
  selector: 'a[underlined], button[underlined]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./underlined-button.component.scss']
})
export class UnderlinedButtonComponent {
  // Note: you may want to add
  // { width: fit-content; }
  // to this element's style.
}
