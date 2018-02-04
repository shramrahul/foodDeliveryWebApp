import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSectionComponent } from './user-dashboard-section.component';

describe('UserDashboardSectionComponent', () => {
  let component: UserDashboardSectionComponent;
  let fixture: ComponentFixture<UserDashboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
