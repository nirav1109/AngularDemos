import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionpaneldemoComponent } from './expansionpaneldemo.component';

describe('ExpansionpaneldemoComponent', () => {
  let component: ExpansionpaneldemoComponent;
  let fixture: ComponentFixture<ExpansionpaneldemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionpaneldemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionpaneldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
