import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelTwoWayComponent } from './ng-model-two-way.component';

describe('NgModelTwoWayComponent', () => {
  let component: NgModelTwoWayComponent;
  let fixture: ComponentFixture<NgModelTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelTwoWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
