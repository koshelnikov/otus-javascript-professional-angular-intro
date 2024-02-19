import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import {ProfileService} from "./services/profile.service";
import { LowercasePipe } from './pipe/lowercase.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import {FormsModule} from "@angular/forms";
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    LowercasePipe,
    HighlightDirective,
    GreetingComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
