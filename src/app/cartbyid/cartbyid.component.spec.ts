import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbyidComponent } from './cartbyid.component';

describe('CartbyidComponent', () => {
  let component: CartbyidComponent;
  let fixture: ComponentFixture<CartbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
