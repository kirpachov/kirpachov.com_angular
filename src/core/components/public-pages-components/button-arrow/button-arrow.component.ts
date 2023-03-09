import { Component, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';

@Component({
  selector: '!app-button-arrow',
  templateUrl: './button-arrow.component.html',
  styleUrls: ['./button-arrow.component.scss'],

})
export class ButtonArrowComponent {

  @Input() content?: TemplateRef<any> | string;

  get contentTemplate(): TemplateRef<any> | undefined {
    return this.content && this.content instanceof TemplateRef<any> ? this.content : undefined;
  }

  get contentText(): string | undefined {
    return this.content && typeof this.content == 'string' ? this.content : undefined;
  }

  @HostBinding('class.showIcon')
  showIcon: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showIcon = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.showIcon = false;
  }
}
