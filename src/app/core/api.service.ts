import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Branch, Repository } from '../repositories/repositories.interface';

@Injectable()
export class ApiService {
  private githubAPI = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  repositories = {
    getForUser: (username: string) =>
      this.http.get<Repository[]>(`${this.githubAPI}/users/${username}/repos`, {
        params: { type: 'all' },
      }),
  };

  branches = {
    getForRepo: (repository: Repository) =>
      this.http.get<Branch[]>(
        `${this.githubAPI}/repos/${repository.owner.login}/${repository.name}/branches`
      ),
  };
}
