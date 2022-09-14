import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarServiceService } from 'src/app/services/snack-bar-service.service';

interface users {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  password: string;
  hobbies:any;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {
  arraydata: users[] = [];
  userForm: any;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBarService:SnackBarServiceService
  ) {}

  ngOnInit() {
    this.createForm();
     const data = localStorage.getItem('user');
     this.arraydata = data ?  JSON.parse(data) : this.arraydata;
     this.addHobbies();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      city: ['', [Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$'
          ),
        ],
      ],
      hobbies:new FormArray([])
    });
  }

  addHobbies()
  {
      const control = new FormControl(null,Validators.required);
      (<FormArray>this.userForm.get('hobbies')).push(control);
  }
  deleteHobbies(index:any)
  {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  formSubmit() {
    let emailExist = false;
    let checkEmail = this.userForm.value.email;
      this.arraydata.forEach((item) => {
        if (item.email === checkEmail) {
          this.errorMessage = 'Email is already exist...';
          emailExist = true;
        }
      });
      if (!emailExist) {
        let length = this.arraydata.length;
        this.arraydata.push(this.userForm.value);
        if (this.arraydata.length > length) {
          localStorage.setItem('user', JSON.stringify(this.arraydata));
          this.errorMessage = 'Registration Successfully...';
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = 'Something went wrong...';
        }
      }


    this.snackBarService.showMessage(this.errorMessage);
  }
}
