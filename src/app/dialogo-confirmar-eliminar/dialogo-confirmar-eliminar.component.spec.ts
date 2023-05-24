import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfirmarEliminarComponent } from './dialogo-confirmar-eliminar.component';

describe('DialogoConfirmarEliminarComponent', () => {
  let component: DialogoConfirmarEliminarComponent;
  let fixture: ComponentFixture<DialogoConfirmarEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoConfirmarEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoConfirmarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
