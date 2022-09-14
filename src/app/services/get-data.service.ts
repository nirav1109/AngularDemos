import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  userName = new BehaviorSubject<any>(null); 

  constructor(private cookie:CookieService) { }

  getData() {  
   const user = localStorage.getItem('user');
    const data = user && JSON.parse(user);
    const email = this.cookie.get('user');
    const loginData = data?.find((e: { email: any }) => e.email === email);
    this.userName.next(loginData.firstName);
    return loginData.firstName;
  }
 
 
}
