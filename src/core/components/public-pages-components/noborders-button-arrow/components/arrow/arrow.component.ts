import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowComponent {

  @ViewChild('stokeCircle') stokeCircle?: ElementRef<any>;

  @HostBinding('class.visited') private visited: boolean = false;

  @HostBinding('class.active')
  @Input() active: boolean = false;

  @Input() arrowDirection: 'left' | 'right' | 'top' | 'bottom' = 'right';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.active && !this.visited) this.visited = true;
  }

  @HostBinding('class.arrow-left')
  get isArrowLeft(): boolean {
    return this.arrowDirection === 'left';
  }

  @HostBinding('class.arrow-right')
  get isArrowRight(): boolean {
    return this.arrowDirection === 'right';
  }

  @HostBinding('class.arrow-top')
  get isArrowUp(): boolean {
    return this.arrowDirection === 'top';
  }

  @HostBinding('class.arrow-bottom')
  get isArrowDown(): boolean {
    return this.arrowDirection === 'bottom';
  }
}
