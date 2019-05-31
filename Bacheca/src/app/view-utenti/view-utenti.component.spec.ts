import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUtentiComponent } from './view-utenti.component';

describe('ViewUtentiComponent', () => {
  let component: ViewUtentiComponent;
  let fixture: ComponentFixture<ViewUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
