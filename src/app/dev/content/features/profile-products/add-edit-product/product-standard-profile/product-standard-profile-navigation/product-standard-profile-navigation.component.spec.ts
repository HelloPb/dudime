import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandardProfileNavigationComponent } from './product-standard-profile-navigation.component';

describe('ProductStandardProfileNavigationComponent', () => {
  let component: ProductStandardProfileNavigationComponent;
  let fixture: ComponentFixture<ProductStandardProfileNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStandardProfileNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStandardProfileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
