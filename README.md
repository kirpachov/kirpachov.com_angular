# kirpachov.com

Translations managed by [poeditor.com](https://poeditor.com)

When building for production, remember to run `production/set-locales.sh`. This script will set value of `locale` key inside each localized folder.
```sh
ng build --localize -c production && ./set-locales.sh
```