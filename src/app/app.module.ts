import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { MapModule } from './map/map.module';

import {
  ApiService,
  AuthGuard,
  CurrencyService,
  LocationService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  UserService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    HomeModule,
    rootRouting,
    SharedModule,
    SettingsModule,
    MapModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    CurrencyService,
    LocationService,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
