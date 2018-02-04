import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomeSectionComponent } from './restaurant-home-section.component';

describe('RestaurantHomeSectionComponent', () => {
  let component: RestaurantHomeSectionComponent;
  let fixture: ComponentFixture<RestaurantHomeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantHomeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
