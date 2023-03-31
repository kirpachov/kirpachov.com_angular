import { ConfigsService } from "@core/services/configs.service";

import { registerLocaleData } from "@angular/common";
import { isDevMode } from "@angular/core";
import localeIt from "@angular/common/locales/it";
import localeEn from "@angular/common/locales/en";

export const validLocaleIds: string[] = ['en-US', 'it-IT'];

var locales: Record<string, any> = {
  'it': localeIt,
  'en': localeEn,
};

export const localeIdFactory = (configsService: ConfigsService): typeof validLocaleIds[number] => {
  // const browserLocale = navigator.language;
  // const localStorageLocale = localStorage.getItem('locale');
  const settingsLocale = configsService.getSync('locale');
  const defaultLocale = validLocaleIds[0];
  const locale = [settingsLocale, defaultLocale].filter(validLocale)[0];

  registerLocaleData(locales[shortLocaleid(locale)]);

  if (isDevMode()) {
    debug({
      // browserLocale,
      // localStorageLocale,
      settingsLocale,
      locale,
      "param of function registerLocaleData": locales[shortLocaleid(locale)],
    });
  }

  return locale;
};

const validLocale = (locale: string) => validLocaleIds.includes(locale);
const shortLocaleid = (locale: string) => locale.split('-')[0];
const debug = (...messsages: any[]) => console.log('[get-locale-id.ts]', ...messsages);
const debugMode: boolean = false;