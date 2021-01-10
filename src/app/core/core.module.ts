import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ApiService } from './api.service';
import { PageContentComponent } from './page-content/page-content.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';
import { NoResultComponent } from './no-result/no-result.component';

@NgModule({
  declarations: [
    PageContentComponent,
    NavigationBarComponent,
    NoResultComponent,
    ToastComponent,
  ],
  imports: [
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    PageContentComponent,
    NavigationBarComponent,
    NoResultComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [ToastService, ApiService],
})
export class CoreModule {}
