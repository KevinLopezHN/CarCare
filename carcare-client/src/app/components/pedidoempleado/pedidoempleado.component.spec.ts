import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoempleadoComponent } from './pedidoempleado.component';

describe('PedidoempleadoComponent', () => {
  let component: PedidoempleadoComponent;
  let fixture: ComponentFixture<PedidoempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
