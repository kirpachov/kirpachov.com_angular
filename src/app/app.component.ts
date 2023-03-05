import { Component } from '@angular/core';
import { TuiBrightness } from '@taiga-ui/core';
import { ThemeService } from 'src/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oleksandr Kirpachov portfolio';

  tuiTheme: TuiBrightness = 'onDark';

  constructor(
    theme: ThemeService
  ){
    theme.theme$.subscribe(theme => {
      this.tuiTheme = theme;
    })
  }
}
