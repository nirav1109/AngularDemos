import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { GetDataService } from 'src/app/services/get-data.service';
import { SnackBarServiceService } from 'src/app/services/snack-bar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService,
    private authService: AuthService,
    private dialog: MatDialog,
    private getDataService:GetDataService,
    private snackBarService :SnackBarServiceService
  ) {}
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  formSubmit() {
    let message = '';
    const user = localStorage.getItem('user');
    const data = user && JSON.parse(user);
    const loginData = data?.find(
      (e: { email: any }) => e.email === this.userForm.value.email
    );
    if (loginData) {
      if (loginData.password === this.userForm.value.password) {
        this.cookie.set('user', this.userForm.value.email);
        this.openDialog();
        this.router.navigate(['/dashboard']);
      } else {
        message = 'password does not match';
        this.snackBarService.showMessage(message);
      }
    } else {
      message = 'account does not exist';
      this.snackBarService.showMessage(message);
    }
  }

  openDialog() {
    const firstName = this.getDataService.getData();
    this.dialog.open(DialogComponent, {
      data: { name: firstName },
    });
  }
}
