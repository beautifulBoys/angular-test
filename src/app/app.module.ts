import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

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
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'header',
        component: Header
      },
      {
        path: 'main',
        component: Main
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
