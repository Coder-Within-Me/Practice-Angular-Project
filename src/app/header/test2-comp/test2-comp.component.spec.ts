import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2CompComponent } from './test2-comp.component';

describe('Test2CompComponent', () => {
  let component: Test2CompComponent;
  let fixture: ComponentFixture<Test2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
