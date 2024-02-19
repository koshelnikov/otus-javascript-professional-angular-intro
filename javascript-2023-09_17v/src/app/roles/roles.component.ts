import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, ViewChild} from '@angular/core';
import {AbstractRoleService, RolesModificationService, RolesService, RoleType} from "../services/roles.service";
import {
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map, Observable, of, startWith,
  Subject,
  switchMap,
} from "rxjs";
import {CommonModule} from "@angular/common";
import {RoleSubItemComponent} from "./role-sub-item/role-sub-item.component";
import {ConfigService} from "../config.service";
import {HttpClient} from "@angular/common/http";

const token = new InjectionToken('version', {providedIn: 'root', factory: () => 1});

// const useValue = new RolesService();
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, RoleSubItemComponent],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],

  providers: [
    // useClass
    //{provide: AbstractRoleService, useClass: RolesService}

    // useFactory
    {
      provide: RolesModificationService,
      useFactory: (httpClient: HttpClient) => {
        return new RolesModificationService(httpClient)
      },
      deps: [HttpClient]
    }

    // useValue
    //{provide: AbstractRoleService, useValue: useValue}

    // useExisting
    //{provide: RolesService, useClass: RolesService},
    //{provide: AbstractRoleService, useExisting: RolesService}
  ],
  viewProviders: [
    //{provide: AbstractRoleService, useClass: RolesModificationService}
    /*
    {
      provide: AbstractRoleService,
      useFactory: (configService: ConfigService) => {
        return new RolesModificationService(configService)
      },
      deps: [ConfigService]
    }

     */
  ]
})
export class RolesComponent implements OnInit, AfterViewInit {

  private $obs = new Subject()

  // 1. Replace by observable
  roles$: Observable<RoleType[]> | null = null

  @ViewChild("search")
  input: ElementRef<HTMLInputElement> | null = null;

  constructor(private rolesService: RolesModificationService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.input) {

      // 2. Show unsubscribe and source code of fromEvent
      this.roles$ =fromEvent(this.input.nativeElement, 'input')
        .pipe(
          map( e => {
            const input = e.target as HTMLInputElement;
            return input.value
          }),
          distinctUntilChanged(),
          debounceTime(500),
          source$ => source$
            .pipe(
              combineLatestWith(this.$obs.pipe(startWith(null))),
              map(([sourceValue]) => sourceValue)),
          switchMap(value => {
            if (value.length === 0) {
              // 3. Show how to return empty array for case when the data is empty
              return of([])
            } else {
              return this.rolesService.getRoles(value)
            }
          })
        )
    }
  }


  onRefreshClick() {
    this.$obs.next(null)
  }
}
