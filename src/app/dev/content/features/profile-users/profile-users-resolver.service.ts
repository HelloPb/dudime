import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ProfileUsersService } from './profile-users.service';
import { HttpWrap } from '../shared/services/http/http-wrap.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileUsersResolverService implements Resolve<boolean> {
  constructor(private cs: ProfileUsersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id');

    return this.cs.getById(id).take(1).map(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}
