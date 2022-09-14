import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogServiceService } from 'src/app/services/dialog-service.service';
import { SnackBarServiceService } from 'src/app/services/snack-bar-service.service';

@Component({
  selector: 'app-customecoponents',
  templateUrl: './customecoponents.component.html',
  styleUrls: ['./customecoponents.component.css']
})
export class CustomecoponentsComponent implements OnInit {

  users: any;
  data:any;
  hobbies=[];
  errorMessage = '';
  constructor(private dialogService : DialogServiceService,  private cookie: CookieService,private snackBar:SnackBarServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.users = localStorage.getItem('user');
    this.data = this.users && JSON.parse(this.users);
    this.data.forEach((el:any) => {
       this.hobbies =  el.hobbies;
    });
  }

  delete(userEmail:any){
    this.dialogService
      .openConfirmDialog('Are sure want to delete this data.!')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          const loggedInUser = this.cookie.get('user');
          if (userEmail === loggedInUser) {
            this.errorMessage =
              "You have logged with this account, can't delete this.";
          } else {
            this.data = this.data.filter(
              (item: any) => item.email !== userEmail
            );
            localStorage.setItem('user', JSON.stringify(this.data));
            this.errorMessage = 'Data deleted successfully !';
            this.getData();
          }
        this.snackBar.showMessage(this.errorMessage);

        }
      });
  }
  edit(id:any){
    alert(id)

  }
  addUser(){
    this.route.navigate(['/signup']);
   } 
   
   updateProfile(){
    this.route.navigate(['/profile']);
  }

}
