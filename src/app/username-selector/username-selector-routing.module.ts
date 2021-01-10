import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsernameSelectorComponent } from './username-selector.component';

const routes: Routes = [
  {
    path: '',
    component: UsernameSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsernameSelectorRoutingModule {}
