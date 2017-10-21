import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandardProfileComponent } from './product-standard-profile.component';

describe('ProductStandardProfileComponent', () => {
  let component: ProductStandardProfileComponent;
  let fixture: ComponentFixture<ProductStandardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStandardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStandardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
