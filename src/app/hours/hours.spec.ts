import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hours } from './hours';

describe('Hours', () => {
  let component: Hours;
  let fixture: ComponentFixture<Hours>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Hours ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
