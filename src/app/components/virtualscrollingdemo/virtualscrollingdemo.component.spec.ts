import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualscrollingdemoComponent } from './virtualscrollingdemo.component';

describe('VirtualscrollingdemoComponent', () => {
  let component: VirtualscrollingdemoComponent;
  let fixture: ComponentFixture<VirtualscrollingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualscrollingdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualscrollingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
