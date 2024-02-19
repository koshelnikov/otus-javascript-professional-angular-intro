import { Component } from '@angular/core';
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  imports: [
    NgIf,
    NgTemplateOutlet
  ],
  standalone: true
})
export class WrapperComponent {

}
