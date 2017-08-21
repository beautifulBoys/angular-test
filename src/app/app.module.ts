import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Main } from './views/main/main';
import { Header } from './components/header/header';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Header
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
