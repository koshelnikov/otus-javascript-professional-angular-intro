import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private dataService: DataService) { }

  getProfile() {
    return this.dataService.getData()
  }
}
