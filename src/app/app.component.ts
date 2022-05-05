import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  router!: string;

  constructor(private _router: Router) {}
  ngOnInit() {}

  getRoute() {
    this.router = this._router.url;
    return this.router;
  }
}
