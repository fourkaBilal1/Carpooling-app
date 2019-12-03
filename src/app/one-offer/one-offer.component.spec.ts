import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfferComponent } from './one-offer.component';

describe('OneOfferComponent', () => {
  let component: OneOfferComponent;
  let fixture: ComponentFixture<OneOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
