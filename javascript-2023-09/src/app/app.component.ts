import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfileService} from "./services/profile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Person';

  isShown = true;

  data = {'centered-text': this.isShown}

  constructor(public profileService: ProfileService) {
  }




}
