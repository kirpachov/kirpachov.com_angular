import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme',
  template: `
    <app-dark-theme *ngIf="theme === 'dark'"></app-dark-theme>

    <app-light-theme *ngIf="theme === 'light'" ></app-light-theme>
`,
})
export class AppThemeComponent {
  @Input() theme: 'dark' | 'light' | 'custom' = 'dark';
}
