import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material';

import { ProductService } from '../shared/services/product.service'

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeAuthResolver,
    ProductService
  ]
})
export class HomeModule {}
