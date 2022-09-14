import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansionpaneldemo',
  templateUrl: './expansionpaneldemo.component.html',
  styleUrls: ['./expansionpaneldemo.component.css']
})
export class ExpansionpaneldemoComponent implements OnInit {
  @ViewChild(MatAccordion, { static: false })
  accordion!: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }

}
