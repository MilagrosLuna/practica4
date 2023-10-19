import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPizzaComponent } from './borrar-pizza.component';

describe('BorrarPizzaComponent', () => {
  let component: BorrarPizzaComponent;
  let fixture: ComponentFixture<BorrarPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarPizzaComponent]
    });
    fixture = TestBed.createComponent(BorrarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
