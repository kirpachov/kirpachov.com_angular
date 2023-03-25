import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'a[bordered], button[bordered]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./bordered-button.component.scss']
})
export class BorderedButtonComponent {
  @HostBinding('style.--border-color')
  @Input()
  borderColor?: string;

  @HostBinding('style.--active-border-color')
  @Input()
  activeBorderColor?: string;

  @HostBinding('class.hovering')
  private hovering: boolean = false;

  @Output() private readonly hoveringChange = new EventEmitter<boolean>();

  constructor(
    public readonly elementRef: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.updateHovering(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.updateHovering(false);
  }

  private updateHovering(value: boolean) {
    if (this.hovering === value) return;

    this.hovering = value;
    this.hoveringChange.emit(this.hovering);
  }

  @HostBinding('style.--border-radius')
  @Input()
  borderRadius?: string;
}
