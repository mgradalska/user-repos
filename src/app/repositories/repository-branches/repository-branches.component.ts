import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Branch, Repository } from '../repositories.interface';
import { ApiService } from '../../core/api.service';
import { ToastService } from '../../core/toast/toast.service';

@Component({
  selector: 'app-repository-branches',
  templateUrl: './repository-branches.component.html',
  styleUrls: ['./repository-branches.component.scss'],
})
export class RepositoryBranchesComponent {
  branches: Branch[] = [];

  listColumns: string[] = ['name', 'commit'];

  loading = false;

  private username = this.route.snapshot.paramMap.get('username') ?? '';

  @Input() repository!: Repository;

  @Input()
  set expanded(expanded: boolean) {
    if (expanded && !this.branches.length) {
      this.getBranches();
    }
  }

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  private async getBranches(): Promise<void> {
    this.loading = true;
    try {
      this.branches = await this.api.branches
        .getForRepo(this.repository)
        .toPromise();
    } catch {
      this.branches = [];
      this.toast.open('error', 'Failed to load repository branches.');
    } finally {
      this.loading = false;
    }
  }
}
