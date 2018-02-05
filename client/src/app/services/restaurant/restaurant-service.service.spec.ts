import { TestBed, inject } from '@angular/core/testing';

import { RestaurantServiceService } from './restaurant-service.service';

describe('RestaurantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantServiceService]
    });
  });

  it('should be created', inject([RestaurantServiceService], (service: RestaurantServiceService) => {
    expect(service).toBeTruthy();
  }));
});
