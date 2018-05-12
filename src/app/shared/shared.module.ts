import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { TablesComponent } from './tables/tables.component';
import { ModalComponent } from './layout/header.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    SatPopoverModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    TablesComponent,
    ModalComponent,
    InlineEditComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    TablesComponent,
    ModalComponent
  ],
  entryComponents: [ ModalComponent ]
})
export class SharedModule {}
