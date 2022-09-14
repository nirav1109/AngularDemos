import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badgesdemo',
  templateUrl: './badgesdemo.component.html',
  styleUrls: ['./badgesdemo.component.css']
})
export class BadgesdemoComponent implements OnInit {

  notifications = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
