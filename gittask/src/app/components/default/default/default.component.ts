import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],

})
export class DefaultComponent implements OnInit {
  public currentRoute: any;
  constructor(
    private router: Router,
  ) {
  }
  ngOnInit(): void {

  }
  changeOfRoutes() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
        this.currentRoute = ev && ev.url;
      }
    });
  }

}
