/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderCrudService } from './provider-crud.service';

describe('Service: ProviderCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderCrudService]
    });
  });

  it('should ...', inject([ProviderCrudService], (service: ProviderCrudService) => {
    expect(service).toBeTruthy();
  }));
});
