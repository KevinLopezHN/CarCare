import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionclienteComponent } from './iniciarsesioncliente.component';

describe('IniciarsesionclienteComponent', () => {
  let component: IniciarsesionclienteComponent;
  let fixture: ComponentFixture<IniciarsesionclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarsesionclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
