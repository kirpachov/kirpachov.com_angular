import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'button[noBordersButtonArrow]',
  templateUrl: './noborders-button-arrow.component.html',
  styleUrls: ['./noborders-button-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NobordersButtonArrowComponent {

  @Input() content?: TemplateRef<any> | string;

  @Input() showArrowBefore: boolean = false;

  @Input() showArrowAfter: boolean = false;

  private _arrowPosition: 'before' | 'after' = 'after';
  @Input() set arrowPosition(value: 'before' | 'after') {
    this.showArrowAfter = value === 'after';
    this.showArrowBefore = value === 'before';

    this._arrowPosition = value;
  }

  get arrowPosition(): 'before' | 'after' {
    return this._arrowPosition;
  }

  get contentTemplate(): TemplateRef<any> | undefined {
    return this.content && this.content instanceof TemplateRef<any> ? this.content : undefined;
  }

  get contentText(): string | undefined {
    return this.content && typeof this.content == 'string' ? this.content : undefined;
  }

  @HostBinding('class.showIcon')
  get isActive(): boolean {
    return this.mouseInside;
  }

  private mouseInside: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.mouseInside = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseInside = false;
  }
}
