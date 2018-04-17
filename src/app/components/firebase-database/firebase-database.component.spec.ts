import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseDatabaseComponent } from './firebase-database.component';

describe('FirebaseDatabaseComponent', () => {
  let component: FirebaseDatabaseComponent;
  let fixture: ComponentFixture<FirebaseDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
