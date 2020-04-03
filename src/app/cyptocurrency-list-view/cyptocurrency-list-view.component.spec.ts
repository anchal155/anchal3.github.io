import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyptocurrencyListViewComponent } from './cyptocurrency-list-view.component';

describe('CyptocurrencyListViewComponent', () => {
  let component: CyptocurrencyListViewComponent;
  let fixture: ComponentFixture<CyptocurrencyListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyptocurrencyListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyptocurrencyListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
