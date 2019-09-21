import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLevelPage } from './select-level.page';

describe('SelectLevelPage', () => {
  let component: SelectLevelPage;
  let fixture: ComponentFixture<SelectLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
