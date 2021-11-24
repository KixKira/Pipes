import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeEs);
registerLocaleData(localeIt);

import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { EncryptPipe } from './pipes/encrypt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomsafePipe,
    EncryptPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
