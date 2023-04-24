import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJwtTokenComponent } from './get-jwt-token.component';

describe('GetJwtTokenComponent', () => {
  let component: GetJwtTokenComponent;
  let fixture: ComponentFixture<GetJwtTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJwtTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJwtTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
