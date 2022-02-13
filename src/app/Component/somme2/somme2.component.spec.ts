import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somme2Component } from './somme2.component';

describe('Somme2Component', () => {
  let component: Somme2Component;
  let fixture: ComponentFixture<Somme2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Somme2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Somme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
