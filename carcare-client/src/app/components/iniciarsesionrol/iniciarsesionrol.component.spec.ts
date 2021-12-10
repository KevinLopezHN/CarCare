import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionrolComponent } from './iniciarsesionrol.component';

describe('IniciarsesionrolComponent', () => {
  let component: IniciarsesionrolComponent;
  let fixture: ComponentFixture<IniciarsesionrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarsesionrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
