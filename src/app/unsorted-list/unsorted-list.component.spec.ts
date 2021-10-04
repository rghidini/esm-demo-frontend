import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsortedListComponent } from './unsorted-list.component';

describe('UnsortedListComponent', () => {
  let component: UnsortedListComponent;
  let fixture: ComponentFixture<UnsortedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsortedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
