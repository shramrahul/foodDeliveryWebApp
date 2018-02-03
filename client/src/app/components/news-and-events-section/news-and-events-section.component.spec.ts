import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndEventsSectionComponent } from './news-and-events-section.component';

describe('NewsAndEventsSectionComponent', () => {
  let component: NewsAndEventsSectionComponent;
  let fixture: ComponentFixture<NewsAndEventsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndEventsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndEventsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
