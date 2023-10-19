import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisRepartidorComponent } from './detalle-pais-repartidor.component';

describe('DetallePaisRepartidorComponent', () => {
  let component: DetallePaisRepartidorComponent;
  let fixture: ComponentFixture<DetallePaisRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePaisRepartidorComponent]
    });
    fixture = TestBed.createComponent(DetallePaisRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
