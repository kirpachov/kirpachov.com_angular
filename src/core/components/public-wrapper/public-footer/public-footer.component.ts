import { Component } from '@angular/core';
import { ConfigsService } from 'src/core/services/configs.service';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent {

  readonly currentYear: number = new Date().getFullYear();

  contactEmail?: string;

  constructor(
    private readonly configs: ConfigsService
  ){
    this.configs.get('contactEmail').subscribe((value) => {
      this.contactEmail = value;
    });
  }

}
