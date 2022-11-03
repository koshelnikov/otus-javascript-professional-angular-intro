import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { HighlightDirective } from './highlight.directive';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HighlightDirective,
    MyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
