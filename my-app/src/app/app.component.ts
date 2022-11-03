import { Component } from '@angular/core';
import {MyService} from "./services/my.service";

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div>Template:</div>
    <div>{{title}} {{myService.hello()}}</div>

    <app-my></app-my>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(public myService: MyService) {
  }
}
