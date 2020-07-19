import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EjemploPage } from './ejemplo.page';

describe('EjemploPage', () => {
  let component: EjemploPage;
  let fixture: ComponentFixture<EjemploPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
