import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../data.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @Input() company: Company;
  filterList: any;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterList = this.filterService.filterList;
  }

  onSelectTag(tag: string) {
    this.filterService.addTag(tag);
  }
}
