import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtualscrollingdemo',
  templateUrl: './virtualscrollingdemo.component.html',
  styleUrls: ['./virtualscrollingdemo.component.css']
})
export class VirtualscrollingdemoComponent implements OnInit {

  numbers :any = [];
  constructor() { 
    for(let i =0;i<=1000;i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
   
  }

}
