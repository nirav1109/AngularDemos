import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private cookie:CookieService, private router :Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.cookie.delete("user");
    this.router.navigate(['/login']);
    
  }

}
