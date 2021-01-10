import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsernameSelectorModule } from './username-selector/username-selector.module';
import { RepositoriesModule } from './repositories/repositories.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    UsernameSelectorModule,
    RepositoriesModule,
  ],
  exports: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
