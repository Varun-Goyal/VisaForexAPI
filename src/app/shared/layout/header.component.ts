import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from '../models';
import { UserService } from '../services';


@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  animal: string;
  name: string;

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class ModalComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("Clicked NO..........");
  }

  logout() {
    this.dialogRef.close();
    console.log("Clicked YES..........");
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
