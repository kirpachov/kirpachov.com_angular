import { Component } from '@angular/core';
import { TuiBrightness } from '@taiga-ui/core';
import { NgxPageInModalService } from 'node_modules/ngx-page-in-modal';
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
    theme: ThemeService,
    private readonly ngxPageInModalService: NgxPageInModalService
  ){
    theme.theme$.subscribe(theme => {
      this.tuiTheme = theme;
    });

    this.ngxPageInModalService.setup({
      animation: 'slide',
      animationDuration: `.25s`,
      closeOnEscape: true,
      closeOnOutsideClick: true,
      navigateBackOnClose: true,
      customStyle: {
        "content-background-color": "var(--app-background-color)",
      }
    });
  }
}
