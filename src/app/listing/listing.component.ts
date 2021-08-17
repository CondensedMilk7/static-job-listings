import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @Input() company: any;

  constructor(private filterService: FilterService) {}

  ngOnInit() {}

  onSelectTag(tag: string) {
    this.filterService.addTag(tag);
  }
}
