import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @Input() company: any;
  logo = '';
  constructor() {}

  ngOnInit() {
    this.logo = this.company.logo;
  }
}
