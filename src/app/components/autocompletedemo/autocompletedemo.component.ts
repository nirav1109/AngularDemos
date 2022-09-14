import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocompletedemo',
  templateUrl: './autocompletedemo.component.html',
  styleUrls: ['./autocompletedemo.component.css']
})
export class AutocompletedemoComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Angular', 'React', 'Node', 'Java', 'Python', 'PHP', 'Sharepoint'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
