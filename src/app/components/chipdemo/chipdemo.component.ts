import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chipdemo',
  templateUrl: './chipdemo.component.html',
  styleUrls: ['./chipdemo.component.css']
})
export class ChipdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    alert('Removed...')
  }
  keywords = new Set(['Angular', 'React', 'Node js']);
  formControl = new FormControl(['Angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

}
