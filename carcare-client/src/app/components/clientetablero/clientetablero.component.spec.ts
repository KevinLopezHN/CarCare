import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientetableroComponent } from './clientetablero.component';

describe('ClientetableroComponent', () => {
  let component: ClientetableroComponent;
  let fixture: ComponentFixture<ClientetableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientetableroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientetableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
