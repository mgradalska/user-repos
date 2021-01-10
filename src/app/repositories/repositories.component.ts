import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { Repository } from './repositories.interface';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class RepositoriesComponent {
  repositories: Repository[] = this.route.snapshot.data.repositories;

  expandedRow: Repository | null = null;

  listColumns = ['name', 'owner'];

  username = this.route.snapshot.paramMap.get('username') ?? '';

  constructor(private route: ActivatedRoute) {}
}
