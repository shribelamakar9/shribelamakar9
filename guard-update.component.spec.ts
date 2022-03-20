import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardUpdateComponent } from './guard-update.component';

describe('GuardUpdateComponent', () => {
  let component: GuardUpdateComponent;
  let fixture: ComponentFixture<GuardUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
