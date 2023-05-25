import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMantEditComponent } from './usuarios-mant-edit.component';

describe('UsuariosMantEditComponent', () => {
  let component: UsuariosMantEditComponent;
  let fixture: ComponentFixture<UsuariosMantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosMantEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
