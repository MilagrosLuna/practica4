import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPizzaComponent } from './modificar-pizza.component';

describe('ModificarPizzaComponent', () => {
  let component: ModificarPizzaComponent;
  let fixture: ComponentFixture<ModificarPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPizzaComponent]
    });
    fixture = TestBed.createComponent(ModificarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
