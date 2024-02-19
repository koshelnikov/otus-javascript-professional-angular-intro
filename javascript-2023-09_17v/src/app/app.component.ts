import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RolesComponent} from "./roles/roles.component";
import {RoleSubItemComponent} from "./roles/role-sub-item/role-sub-item.component";
import {CounterComponent} from "./counter/counter.component";
import {WrapperComponent} from "./wrapper/wrapper.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RolesComponent,
    RoleSubItemComponent,
    CounterComponent,
    WrapperComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'javascript-2023-09_17v';
  appCounter: number = 10;


  @ViewChild('childCounterRef')
  childCounter!: CounterComponent
}
