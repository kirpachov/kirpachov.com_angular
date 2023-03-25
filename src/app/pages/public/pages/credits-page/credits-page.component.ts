import { Component } from '@angular/core';

@Component({
  selector: 'app-credits-page',
  templateUrl: './credits-page.component.html',
  styleUrls: ['./credits-page.component.scss']
})
export class CreditsPageComponent {
  readonly items: {
    title: string,
    imgSrc?: string,
    link?: string,
  }[] = [
    { title: "Angular", imgSrc: `/assets/images/angular-logo.svg`, link: `https://angular.io` },
    { title: "Taiga-ui", imgSrc: `/assets/images/taiga-logo.svg`, link: `https://taiga-ui.dev/` },
    { title: "actiocable (js)", imgSrc: ``, link: `https://www.npmjs.com/package/actioncable` },
    { title: "rxjs", imgSrc: `/assets/images/rxjs-logo.png`, link: `https://www.npmjs.com/package/rxjs` },
    { title: "zone.js", imgSrc: ``, link: `https://www.npmjs.com/package/zone.js` },
    { title: "cypress", imgSrc: `/assets/images/cypress-logo-dark.png`, link: `https://www.cypress.io/` },
    { title: "Ruby on Rails", imgSrc: `/assets/images/ror-dark-logo.png`, link: `https://rubyonrails.org/` },
    { title: "pg", imgSrc: ``, link: `https://rubygems.org/gems/pg` },
    { title: "puma", imgSrc: ``, link: `https://rubygems.org/gems/puma` },
    { title: "active_interaction", imgSrc: ``, link: `https://rubygems.org/gems/active_interaction` },
    { title: "active_model_serializers", imgSrc: ``, link: `https://rubygems.org/gems/active_model_serializers` },
    { title: "text-table", imgSrc: ``, link: `https://rubygems.org/gems/text-table` },
    { title: "globalize", imgSrc: ``, link: `https://rubygems.org/gems/globalize` },
    { title: "rubyzip", imgSrc: ``, link: `https://rubygems.org/gems/rubyzip` },
    { title: "redis", imgSrc: ``, link: `https://rubygems.org/gems/redis` },
    { title: "redis-namespace", imgSrc: ``, link: `https://rubygems.org/gems/redis-namespace` },
    { title: "sidekiq", imgSrc: ``, link: `https://rubygems.org/gems/sidekiq` },
    { title: "sidekiq-cron", imgSrc: ``, link: `https://rubygems.org/gems/sidekiq-cron` },
    { title: "activerecord-import", imgSrc: ``, link: `https://rubygems.org/gems/activerecord-import` },
    { title: "simple_command", imgSrc: ``, link: `https://rubygems.org/gems/simple_command` },
    { title: "will_paginate", imgSrc: ``, link: `https://rubygems.org/gems/will_paginate` },
    { title: "mustache", imgSrc: ``, link: `https://rubygems.org/gems/mustache` },
    { title: "timeout", imgSrc: ``, link: `https://rubygems.org/gems/timeout` },
    { title: "faker", imgSrc: ``, link: `https://rubygems.org/gems/faker` },
    { title: "pry", imgSrc: ``, link: `https://rubygems.org/gems/pry` },
    { title: "factory_bot_rails", imgSrc: ``, link: `https://rubygems.org/gems/factory_bot_rails` },
    { title: "database_cleaner", imgSrc: ``, link: `https://rubygems.org/gems/database_cleaner` },
    { title: "rspec-rails", imgSrc: ``, link: `https://rubygems.org/gems/rspec-rails` },
    { title: "rspec", imgSrc: ``, link: `https://rubygems.org/gems/rspec` },
    { title: "rails-controller-testing", imgSrc: ``, link: `https://rubygems.org/gems/rails-controller-testing` },
    { title: "shoulda-matchers", imgSrc: ``, link: `https://rubygems.org/gems/shoulda-matchers` },
    { title: "guard", imgSrc: ``, link: `https://rubygems.org/gems/guard` },
    { title: "guard-rspec", imgSrc: ``, link: `https://rubygems.org/gems/guard-rspec` },
    { title: "guard-rails", imgSrc: ``, link: `https://rubygems.org/gems/guard-rails` },
  ];
}
