import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPageComponent } from './billing-page.component';

describe('BillingPageComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingPageComponent]
    });
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
