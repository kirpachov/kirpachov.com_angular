import { Component, Inject, Self } from '@angular/core';
import { ConfigsService } from '@core/services/configs.service';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { tuiFormatPhone } from '@taiga-ui/core';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
  providers: [
    TuiDestroyService
  ]
})
export class ContactsPageComponent {

  phoneContact?: string;
  emailContact?: string;
  phonePrefix? = '+39';

  constructor(
    private readonly configs: ConfigsService,
    @Self()
    @Inject(TuiDestroyService)
    private readonly destroy$: TuiDestroyService
  ) {
    configs.getMultiple(['contact.phone', 'contact.email', 'contact.phone.prefix']).pipe(
      takeUntil(this.destroy$)
    ).subscribe((configs) => {
      this.phoneContact = configs['contact.phone'];
      this.emailContact = configs['contact.email'];
      this.phonePrefix = configs['contact.phone.prefix'];
    });
  }
}
