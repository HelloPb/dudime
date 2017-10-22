import { TestBed, inject } from '@angular/core/testing';

import { ProfileUsersResolverService } from './profile-users-resolver.service';

describe('ProfileUsersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUsersResolverService]
    });
  });

  it('should be created', inject([ProfileUsersResolverService], (service: ProfileUsersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
