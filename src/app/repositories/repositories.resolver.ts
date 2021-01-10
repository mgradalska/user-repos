import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Repository } from './repositories.interface';
import { ApiService } from '../core/api.service';
import { ToastService } from '../core/toast/toast.service';

@Injectable({providedIn: 'root'})
export class RepositoriesResolver implements Resolve<Repository[]> {
  constructor(private api: ApiService, private toast: ToastService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Repository[]> {
    const username = route.paramMap.get('username') ?? '';
    return this.api.repositories.getForUser(username).pipe(
      map((repositories) => repositories.filter((repo) => !repo.fork)),
      catchError((error) => {
        const errorMessage =
          error.status === 404
            ? 'User with given username does not exist.'
            : 'Failed to load user repositories.';
        this.toast.open('error', errorMessage);
        return throwError(error);
      })
    );
  }
}
