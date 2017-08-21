import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { BodyComponent } from './body/body.component';
import { ChildComponent } from './some/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    BodyComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
