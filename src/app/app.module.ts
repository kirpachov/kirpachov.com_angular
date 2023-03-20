import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiModeModule, TuiThemeNightModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PublicWrapperModule } from "src/core/components/public-wrapper/public-wrapper.module";
import { ThemesModule } from "src/core/components/themes/themes.module";
import { UnderlinedButtonModule } from "src/core/components/underlined-button/underlined-button.module";
import { HttpClientModule } from "@angular/common/http";
import { ConfigsService } from "src/core/services/configs.service";
import { initialLoadConfigs } from "src/core/lib/initial-load-configs";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TuiDialogModule,
    TuiAlertModule,
    PublicWrapperModule,
    ThemesModule,
    UnderlinedButtonModule,
    TuiRootModule,
    TuiModeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: APP_INITIALIZER, useFactory: initialLoadConfigs, deps: [ConfigsService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
