import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { CoreModule } from '../core/core.module';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoryBranchesComponent } from './repository-branches/repository-branches.component';

@NgModule({
  declarations: [RepositoriesComponent, RepositoryBranchesComponent],
  imports: [
    RepositoriesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    CoreModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class RepositoriesModule {}
