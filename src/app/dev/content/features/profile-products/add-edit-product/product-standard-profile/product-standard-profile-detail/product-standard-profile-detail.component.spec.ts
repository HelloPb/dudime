import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandardProfileDetailComponent } from './product-standard-profile-detail.component';

describe('ProductStandardProfileDetailComponent', () => {
  let component: ProductStandardProfileDetailComponent;
  let fixture: ComponentFixture<ProductStandardProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStandardProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStandardProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
