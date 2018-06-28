import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAtaComponent } from './formulario-ata.component';

describe('FormularioAtaComponent', () => {
  let component: FormularioAtaComponent;
  let fixture: ComponentFixture<FormularioAtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
