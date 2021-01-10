import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ToastComponent } from './toast.component';
import { ToastData, ToastType } from './toast.interface';

@Injectable()
export class ToastService {
  private dialogRef: MatDialogRef<ToastComponent> | null = null;

  constructor(public dialog: MatDialog) {}

  open(type: ToastType, message: string): void {
    this.close();

    this.dialogRef = this.dialog.open(ToastComponent, {
      hasBackdrop: false,
      position: {
        bottom: '10px',
        right: '10px',
      },
      maxWidth: '500px',
      minWidth: '200px',
      panelClass: type,
      data: {
        text: message,
      } as ToastData,
    });

    setTimeout(() => this.close(), 5000);
  }

  close(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
