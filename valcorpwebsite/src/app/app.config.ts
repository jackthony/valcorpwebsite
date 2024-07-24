import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScrollService } from './servicios/scroll.service';

export const appConfig: ApplicationConfig = {
  providers:
    [provideRouter(
      routes, withComponentInputBinding(),withViewTransitions())
      , provideClientHydration(),
    provideAnimationsAsync(),ScrollService]
};
