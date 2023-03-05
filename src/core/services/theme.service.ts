import { Injectable } from '@angular/core';
import { TuiBrightness } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly theme$ = new BehaviorSubject<TuiBrightness>('onDark');

  theme: TuiBrightness = 'onDark';

  constructor() { }
}
