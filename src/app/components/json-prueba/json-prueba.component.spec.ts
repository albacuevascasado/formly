import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPruebaComponent } from './json-prueba.component';

describe('JsonPruebaComponent', () => {
  let component: JsonPruebaComponent;
  let fixture: ComponentFixture<JsonPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
