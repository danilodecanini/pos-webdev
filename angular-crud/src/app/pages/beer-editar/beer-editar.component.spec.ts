import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditarComponent } from './beer-editar.component';

describe('BeerEditarComponent', () => {
  let component: BeerEditarComponent;
  let fixture: ComponentFixture<BeerEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
