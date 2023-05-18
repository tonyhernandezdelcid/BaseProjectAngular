import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMantHomeComponent } from './usuarios-mant-home.component';

describe('UsuariosMantHomeComponent', () => {
  let component: UsuariosMantHomeComponent;
  let fixture: ComponentFixture<UsuariosMantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosMantHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
