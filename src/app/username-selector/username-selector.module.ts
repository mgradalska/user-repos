import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { UsernameSelectorComponent } from './username-selector.component';
import { UsernameSelectorRoutingModule } from './username-selector-routing.module';

@NgModule({
  declarations: [UsernameSelectorComponent],
  imports: [
    UsernameSelectorRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class UsernameSelectorModule {}
