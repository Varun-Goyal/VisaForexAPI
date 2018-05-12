import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { AuthGuard } from '../shared';
import {
  MatAutocompleteModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
 } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'locate',
    component: MapComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    settingsRouting,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGQynydOzMnLaoy9YKxl9trOgLpC1tVCI'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MapComponent
  ]
})

export class MapModule { }
