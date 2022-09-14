import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesdemoComponent } from './badgesdemo.component';

describe('BadgesdemoComponent', () => {
  let component: BadgesdemoComponent;
  let fixture: ComponentFixture<BadgesdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
