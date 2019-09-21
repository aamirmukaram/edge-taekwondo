import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySplashScreenPage } from './secondary-splash-screen.page';

describe('SecondarySplashScreenPage', () => {
  let component: SecondarySplashScreenPage;
  let fixture: ComponentFixture<SecondarySplashScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySplashScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
