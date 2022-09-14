import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipdemoComponent } from './chipdemo.component';

describe('ChipdemoComponent', () => {
  let component: ChipdemoComponent;
  let fixture: ComponentFixture<ChipdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
