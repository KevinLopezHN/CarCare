import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradortableroComponent } from './administradortablero.component';

describe('AdministradortableroComponent', () => {
  let component: AdministradortableroComponent;
  let fixture: ComponentFixture<AdministradortableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradortableroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradortableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
