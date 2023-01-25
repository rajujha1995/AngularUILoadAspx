import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDownConsentComponent } from './pay-down-consent.component';

describe('PayDownConsentComponent', () => {
  let component: PayDownConsentComponent;
  let fixture: ComponentFixture<PayDownConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayDownConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayDownConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
