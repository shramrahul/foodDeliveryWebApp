import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodySectionComponent } from './home-body-section.component';

describe('HomeBodySectionComponent', () => {
  let component: HomeBodySectionComponent;
  let fixture: ComponentFixture<HomeBodySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
