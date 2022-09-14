import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { SnackBarServiceService } from 'src/app/services/snack-bar-service.service';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  userForm: any;
  user = localStorage.getItem('user');
  data = this.user && JSON.parse(this.user);
  email = this.cookie.get('user');
  errorMessage = '';
  hobbiesArray!: FormArray;
  hobbies=[];

  constructor(
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarServiceService,
    private getDataSevice: GetDataService
  ) {}

  ngOnInit() {
    this.getData();

  }
  getData(){
    this.loggedInUser = this.data?.find(
      (e: { email: any }) => e.email === this.email
    );
    this.createForm();
    this.hobbies = this.loggedInUser.hobbies;
    this.hobbiesArray = this.userForm.get('hobbies') as FormArray;
    this.setHobbies(this.hobbies);
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: [
        this.loggedInUser.firstName,
        [Validators.required, Validators.pattern('^[a-zA-Z]*')],
      ],
      lastName: [
        this.loggedInUser.lastName,
        [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      ],
      city: [this.loggedInUser.city, [Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: [{ value: this.loggedInUser.email, disabled: true }],
      password: [
        '',
        [
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$'
          ),
        ],
      ],
      hobbies: new FormArray([]),
    });
  }

  setHobbies(hobbies: any[]) {
    hobbies.forEach((element) => {
      let formGroup: any;
      formGroup = this.formBuilder.group({
        hobbies: [element]
      });
      this.hobbiesArray.push(formGroup);
    });

  }
  addHobbies() {
    let formGroup: any;
      formGroup = this.formBuilder.group({
        hobbies: []
      });
    (<FormArray>this.userForm.get('hobbies')).push(formGroup);
  }
  deleteHobbies(index:any)
  {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  updateData() {
    const updatedValue = this.userForm.getRawValue();
    let index = this.data.findIndex((item: any) => item.email === this.email);
    let hobby:any=[];
    updatedValue.hobbies.forEach((element:any) => {
      hobby.push(element.hobbies);
    });
    const oldValue = this.data[index];
    const isPasswordUpdated =oldValue.password !== updatedValue.password? updatedValue.password !== '': false;
    let result =  oldValue.hobbies.length === hobby.length &&  oldValue.hobbies.every(function (element:any) {
    return hobby.includes(element);
  });
    const isUpdate =
    oldValue.firstName !== updatedValue.firstName ||
    oldValue.lastName !== updatedValue.lastName ||
    !result ||
    oldValue.city !== updatedValue.city || isPasswordUpdated;

    if(isUpdate)
    {
      updatedValue.password = updatedValue.password || oldValue.password;
      this.data[index] = updatedValue;
      this.data[index]['hobbies'] = hobby ;
      this.errorMessage = 'Data udated successfully...!';
      localStorage.setItem('user', JSON.stringify(this.data));
      this.getDataSevice.getData();
      this.userForm.controls.password.setValue("");
    }else {
      this.errorMessage = 'No changes found...!';
    }
    this.snackBarService.showMessage(this.errorMessage);
  }
}
