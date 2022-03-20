import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlatRentComponent } from './create-flat-rent.component';

describe('CreateFlatRentComponent', () => {
  let component: CreateFlatRentComponent;
  let fixture: ComponentFixture<CreateFlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
