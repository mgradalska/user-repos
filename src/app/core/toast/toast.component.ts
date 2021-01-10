import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ToastData } from './toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ToastData) {}
}
