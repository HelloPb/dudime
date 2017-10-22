import { TestBed, inject } from '@angular/core/testing';

import { ProfileUsersService } from './profile-users.service';

describe('ProfileUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUsersService]
    });
  });

  it('should be created', inject([ProfileUsersService], (service: ProfileUsersService) => {
    expect(service).toBeTruthy();
  }));
});
