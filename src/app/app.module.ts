import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StylingModule } from './shared/styling.module';

import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StylingModule],
  providers: [
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Material,
        options: {
          // darkModeSelector: '.my-app-dark',
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
