import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsSectionComponent } from './restaurants-section.component';

describe('RestaurantsSectionComponent', () => {
  let component: RestaurantsSectionComponent;
  let fixture: ComponentFixture<RestaurantsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
