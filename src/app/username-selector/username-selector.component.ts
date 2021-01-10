import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-username-selector',
  templateUrl: './username-selector.component.html',
  styleUrls: ['./username-selector.component.scss'],
})
export class UsernameSelectorComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  constructor(private api: ApiService, private router: Router) {}

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const username: string = this.form.value.username;
      await this.router.navigate([`/repositories/${username}`]);
    }
  }
}
