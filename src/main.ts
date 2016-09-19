import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { APP_INITIALIZER, provide } from '@angular/core';
import { ConfigService } from './config/config.service';

platformBrowserDynamic().bootstrapModule(AppModule);
