import { ProductSpecificProfilesComponent } from './specific-profiles.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProductSpecificProfilesComponent', () => {
  let component: ProductSpecificProfilesComponent;
  let fixture: ComponentFixture<ProductSpecificProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSpecificProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecificProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
