import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { EnvironmentInjector, enableProdMode } from '@angular/core';
import { environment } from './environment/environment.prod'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if(environment.production) {
    enableProdMode();
}