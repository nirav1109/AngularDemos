import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDemosComponent } from './materials-demos.component';

describe('MaterialsDemosComponent', () => {
  let component: MaterialsDemosComponent;
  let fixture: ComponentFixture<MaterialsDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
