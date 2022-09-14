import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(state:string){
    console.log(state)
  }

}
