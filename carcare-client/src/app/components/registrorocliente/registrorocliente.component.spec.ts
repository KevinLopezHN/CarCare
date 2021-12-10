import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroroclienteComponent } from './registrorocliente.component';

describe('RegistroroclienteComponent', () => {
  let component: RegistroroclienteComponent;
  let fixture: ComponentFixture<RegistroroclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroroclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroroclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
