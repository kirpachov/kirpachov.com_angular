import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dark-theme',
template: '<tui-theme-night></tui-theme-night>',
  styleUrls: [
    '../default-theme.scss',
    './dark-theme.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkThemeComponent {

}
