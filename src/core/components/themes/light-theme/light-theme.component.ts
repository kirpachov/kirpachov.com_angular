import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-light-theme',
  template: ``,
  styleUrls: [
    `../default-theme.scss`,
    './light-theme.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightThemeComponent {

}
