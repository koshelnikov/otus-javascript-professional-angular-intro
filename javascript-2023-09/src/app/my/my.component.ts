import {
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {GreetingComponent} from "../greeting/greeting.component";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements
  OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit
  , AfterViewChecked
{

  @Input()
  firstName: string

  @ViewChild(GreetingComponent)
  greetingComponent: GreetingComponent | null = null

  // @ContentChild()


  isGreetingShown = true

  constructor(public profileService: ProfileService) {
    this.firstName = profileService.getProfile().name
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MyComponent ngOnChange')
    console.log(changes)

    if (changes['firstName'].currentValue === 'Person2') {
      console.log('Person2 is arrived')
    }
  }

  ngOnInit() {
    console.log('MyComponent ngOnInit')
  }

  ngDoCheck(): void {
    console.log('MyComponent ngDoCheck')
  }

  ngOnDestroy(): void {
    console.log('MyComponent ngOnDestroy')
  }

  ngAfterViewInit(): void {
    console.log('MyComponent ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('MyComponent ngAfterViewChecked')

    console.log(this.greetingComponent)
  }




}
