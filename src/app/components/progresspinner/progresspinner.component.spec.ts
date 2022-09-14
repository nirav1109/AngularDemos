import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresspinnerComponent } from './progresspinner.component';

describe('ProgresspinnerComponent', () => {
  let component: ProgresspinnerComponent;
  let fixture: ComponentFixture<ProgresspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresspinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
