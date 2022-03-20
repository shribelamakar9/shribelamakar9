import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRentListComponent } from './flat-rent-list.component';

describe('FlatRentListComponent', () => {
  let component: FlatRentListComponent;
  let fixture: ComponentFixture<FlatRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
