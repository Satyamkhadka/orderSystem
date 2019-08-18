/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FireauthService } from './fireauth.service';

describe('Service: Fireauth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireauthService]
    });
  });

  it('should ...', inject([FireauthService], (service: FireauthService) => {
    expect(service).toBeTruthy();
  }));
});
