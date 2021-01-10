import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'get-username',
    loadChildren: () =>
      import('./username-selector/username-selector-routing.module').then(
        (m) => m.UsernameSelectorRoutingModule
      ),
  },
  {
    path: 'repositories/:username',
    loadChildren: () =>
      import('./repositories/repositories-routing.module').then(
        (m) => m.RepositoriesRoutingModule
      ),
  },
  { path: '', redirectTo: 'get-username', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
