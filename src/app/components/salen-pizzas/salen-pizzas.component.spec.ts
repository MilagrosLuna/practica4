import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalenPizzasComponent } from './salen-pizzas.component';

describe('SalenPizzasComponent', () => {
  let component: SalenPizzasComponent;
  let fixture: ComponentFixture<SalenPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalenPizzasComponent]
    });
    fixture = TestBed.createComponent(SalenPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
