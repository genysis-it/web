import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadPasswordComponent } from './bad-password.component';

describe('BadPasswordComponent', () => {
  let component: BadPasswordComponent;
  let fixture: ComponentFixture<BadPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
