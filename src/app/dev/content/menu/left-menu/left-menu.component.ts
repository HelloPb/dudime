import { ActivatedRoute, Router } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  private search(): void {
    this.router.navigate([`/content/products/search`]);
  }
}
