import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadotableroComponent } from './empleadotablero.component';

describe('EmpleadotableroComponent', () => {
  let component: EmpleadotableroComponent;
  let fixture: ComponentFixture<EmpleadotableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadotableroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadotableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
