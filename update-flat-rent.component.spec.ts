import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlatRentComponent } from './update-flat-rent.component';

describe('UpdateFlatRentComponent', () => {
  let component: UpdateFlatRentComponent;
  let fixture: ComponentFixture<UpdateFlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
