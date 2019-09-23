import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question20Component } from './question20.component';

describe('Question20Component', () => {
  let component: Question20Component;
  let fixture: ComponentFixture<Question20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question20Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
