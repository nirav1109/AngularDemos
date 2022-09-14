import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresspinner',
  templateUrl: './progresspinner.component.html',
  styleUrls: ['./progresspinner.component.css']
})
export class ProgresspinnerComponent implements OnInit {

  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner =false;
    },5000);
  }
}
