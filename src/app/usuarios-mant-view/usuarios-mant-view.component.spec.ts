import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMantViewComponent } from './usuarios-mant-view.component';

describe('UsuariosMantViewComponent', () => {
  let component: UsuariosMantViewComponent;
  let fixture: ComponentFixture<UsuariosMantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosMantViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
