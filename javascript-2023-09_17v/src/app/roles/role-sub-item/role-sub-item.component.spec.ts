import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSubItemComponent } from './role-sub-item.component';

describe('RoleSubItemComponent', () => {
  let component: RoleSubItemComponent;
  let fixture: ComponentFixture<RoleSubItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleSubItemComponent]
    });
    fixture = TestBed.createComponent(RoleSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
