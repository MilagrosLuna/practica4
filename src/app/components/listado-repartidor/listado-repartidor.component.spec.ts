import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRepartidorComponent } from './listado-repartidor.component';

describe('ListadoRepartidorComponent', () => {
  let component: ListadoRepartidorComponent;
  let fixture: ComponentFixture<ListadoRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoRepartidorComponent]
    });
    fixture = TestBed.createComponent(ListadoRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
