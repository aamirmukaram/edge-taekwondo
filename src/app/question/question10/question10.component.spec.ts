import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question10Component } from './question10.component';

describe('Question10Component', () => {
  let component: Question10Component;
  let fixture: ComponentFixture<Question10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question10Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
