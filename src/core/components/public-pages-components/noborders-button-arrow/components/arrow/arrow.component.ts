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

  // stokeDashOffset = 0;
  // 175.92918860102841

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.setStokeDashOffset();
    if (this.active && !this.visited) this.visited = true;
  }

  private setStokeDashOffset() {
    if (this.stokeCircle) {
      const circleLength = this.stokeCircle.nativeElement.getTotalLength();
      if (this.active){
        // this.stokeDashOffset = circleLength;
        // this.stokeCircle.nativeElement.style.strokeDashoffset = circleLength;
        this.setStroke(circleLength, 0, 1000);
      }else{
        this.setStroke(0, circleLength, 1000);
        // this.stokeDashOffset = 0;
        // this.stokeCircle.nativeElement.style.strokeDashoffset = 0;
      }
    }
  }

  // private setStroke(from: number, to: number, time: number = 1): void {}

  private setStroke(from: number, to: number, time: number = 1): void {
    if (!(this.stokeCircle && this.stokeCircle.nativeElement)) return console.error('No stokeCircle');

    console.log(this.stokeCircle);

    // if (this.stokeCircle) {
    //   const circleLength = this.stokeCircle.nativeElement.getTotalLength();
    //   const start = performance.now();
    //   const animate = (time: number) => {
    //     const timeFraction = (time - start) / time;
    //     if (timeFraction < 1) {
    //       const progress = from + (to - from) * timeFraction;
    //       this.stokeCircle!.nativeElement.style.strokeDashoffset = circleLength - progress;
    //       requestAnimationFrame(animate);
    //     } else {
    //       this.stokeCircle!.nativeElement.style.strokeDashoffset = circleLength - to;
    //     }
    //   };
    //   requestAnimationFrame(animate);
    // }
  }

  // private setStroke(from: number, to: number, time: number = 1): void {
  //   if (!(this.stokeCircle && this.stokeCircle.nativeElement)) return;

  //   const circleLength = this.stokeCircle.nativeElement.getTotalLength();
  //   const circle = this.stokeCircle.nativeElement;

  // }

}
