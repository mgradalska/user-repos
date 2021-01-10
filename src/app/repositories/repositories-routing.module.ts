import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';
import { RepositoriesResolver } from './repositories.resolver';

const routes: Routes = [
  {
    path: '',
    component: RepositoriesComponent,
    resolve: {
      repositories: RepositoriesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoriesRoutingModule {}
