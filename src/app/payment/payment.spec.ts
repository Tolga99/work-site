import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Payment } from './payment';

describe('PaymentPage', () => {
  let component: Payment;
  let fixture: ComponentFixture<Payment>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Payment ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Payment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
