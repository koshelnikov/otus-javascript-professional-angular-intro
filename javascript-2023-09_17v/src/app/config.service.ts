import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  get apiUrl() {
    return "http://localhost:8080"
  }
}
