import { Component, OnInit } from '@angular/core';
import {ModalComponent} from './shared/layout/header.component';

import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
