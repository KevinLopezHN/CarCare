import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrorolComponent } from './registrorol.component';

describe('RegistrorolComponent', () => {
  let component: RegistrorolComponent;
  let fixture: ComponentFixture<RegistrorolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrorolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrorolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
