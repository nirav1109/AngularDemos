import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogServiceService } from 'src/app/services/dialog-service.service';
import { CookieService } from 'ngx-cookie-service';
import { SnackBarServiceService } from 'src/app/services/snack-bar-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements  AfterViewInit{

  errorMessage = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'city',
    'hobbies',
    'email',
    'password',
    'action',
  ];

  users: any;
  dataSource!:MatTableDataSource<any>;
  data :any;

  constructor(
    private dialogService: DialogServiceService,
    private cookie: CookieService,
    private snackBar: SnackBarServiceService
  ) {
    this.getData();
  }

  getData() {
    this.users = localStorage.getItem('user');
    this.data = this.users && JSON.parse(this.users);
    this.dataSource = new MatTableDataSource(this.data);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(userEmail: any) {
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
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        this.snackBar.showMessage(this.errorMessage);

        }
      });
  }
}
