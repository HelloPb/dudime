import { UserCultureService } from '../../shared/services/culture/user-culture/user-culture.service';
import { CountryCultureService } from '../../shared/services/culture/country-culture/country-culture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor
    (
    private countryCultureService: CountryCultureService,
    private userCultureService: UserCultureService
    ) {

  }

  ngOnInit() {
  }

}
