import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Tabs } from './tabs';

describe('TabsPage', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tabs],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
