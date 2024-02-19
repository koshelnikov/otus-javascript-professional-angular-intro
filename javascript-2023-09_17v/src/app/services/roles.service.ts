import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ConfigService} from "../config.service";
import {HttpClient} from "@angular/common/http";

export type RoleType = {
  id: number
  name: string
}

export abstract class AbstractRoleService {
  abstract getRoles(searchPattern: string): Promise<RoleType[]> | Observable<RoleType[]>
}

export class RolesService implements AbstractRoleService {
  constructor(protected httpClient: HttpClient) {
  }

  getRoles(searchPattern: string): Promise<RoleType[]> {
    // 1. fetch
    // 2. HTTP client
    return fetch(`http://localhost:8080/roles?name_like=${searchPattern}`).then(response => response.json())
  }
}

export class RolesModificationService {
  constructor(protected httpClient: HttpClient) {
  }

  getRoles(searchPattern: string): Observable<RoleType[]> {
    return this.httpClient.get<RoleType[]>(`http://localhost:8080/roles?name_like=${searchPattern}`);
    // 1. fetch
    // 2. HTTP client

    /*
    const response = await fetch(`http://localhost:8080/roles?name_like=${searchPattern}`)


    const data = await response.json();
    return data.map((item: RoleType) => {
      item.name = `${item.name} suffix has been modified`;
      return item
    })
     */
  }
}
