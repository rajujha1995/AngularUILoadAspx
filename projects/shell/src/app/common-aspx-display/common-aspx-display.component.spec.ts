import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAspxDisplayComponent } from './common-aspx-display.component';

describe('CommonAspxDisplayComponent', () => {
  let component: CommonAspxDisplayComponent;
  let fixture: ComponentFixture<CommonAspxDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonAspxDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonAspxDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
