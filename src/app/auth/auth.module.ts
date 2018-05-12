import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
 } from '@angular/material';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    AuthComponent
  ],

  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
