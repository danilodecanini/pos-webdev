import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetalheComponent } from './beer-detalhe.component';

describe('BeerDetalheComponent', () => {
  let component: BeerDetalheComponent;
  let fixture: ComponentFixture<BeerDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
