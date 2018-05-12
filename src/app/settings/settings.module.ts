import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
 } from '@angular/material';

import { SettingsComponent } from './settings.component';
import { AuthGuard, SharedModule } from '../shared';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    settingsRouting,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
