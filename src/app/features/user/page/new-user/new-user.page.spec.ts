import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPageComponent } from './new-user.page';

describe('NewUserComponent', () => {
  let component: NewUserPageComponent;
  let fixture: ComponentFixture<NewUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
