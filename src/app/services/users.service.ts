import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string ="https://jsonplaceholder.cypress.io/";

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl + "users");
  }
}
