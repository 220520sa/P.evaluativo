import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionComponent } from './accion.component';

describe('AccionComponent', () => {
  let component: AccionComponent;
  let fixture: ComponentFixture<AccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccionComponent]
    });
    fixture = TestBed.createComponent(AccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
