import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionadministradorComponent } from './iniciarsesionadministrador.component';

describe('IniciarsesionadministradorComponent', () => {
  let component: IniciarsesionadministradorComponent;
  let fixture: ComponentFixture<IniciarsesionadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarsesionadministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
