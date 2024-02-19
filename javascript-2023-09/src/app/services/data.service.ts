import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = {
    id: 1,
    name: 'Test User'
  }

  constructor() { }

  getData() {
   return this.data
  }
}
