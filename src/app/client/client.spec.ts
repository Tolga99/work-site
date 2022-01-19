import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Client } from './client';

describe('ClientPage', () => {
  let component: Client;
  let fixture: ComponentFixture<Client>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Client ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Client);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
