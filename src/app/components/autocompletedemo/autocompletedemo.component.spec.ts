import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletedemoComponent } from './autocompletedemo.component';

describe('AutocompletedemoComponent', () => {
  let component: AutocompletedemoComponent;
  let fixture: ComponentFixture<AutocompletedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
