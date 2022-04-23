import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMakingComponent } from './order-making.component';

describe('OrderMakingComponent', () => {
  let component: OrderMakingComponent;
  let fixture: ComponentFixture<OrderMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
