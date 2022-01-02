import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Articles } from './articles';

describe('ArticlesPage', () => {
  let component: Articles;
  let fixture: ComponentFixture<Articles>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Articles ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Articles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
