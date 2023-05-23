import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMantAddComponent } from './usuarios-mant-add.component';

describe('UsuariosMantAddComponent', () => {
  let component: UsuariosMantAddComponent;
  let fixture: ComponentFixture<UsuariosMantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosMantAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
