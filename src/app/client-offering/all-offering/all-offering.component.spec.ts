/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllOfferingComponent } from './all-offering.component';

describe('AllOfferingComponent', () => {
  let component: AllOfferingComponent;
  let fixture: ComponentFixture<AllOfferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOfferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
