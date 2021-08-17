import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  filterList: string[] = [];
  filterSub = new Subscription();

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterSub = this.filterService.activeTags.subscribe((tags) => {
      this.filterList = [...tags];
    });
  }

  ngOnDestroy() {
    this.filterSub.unsubscribe();
  }

  onClear() {
    this.filterService.clearFilter();
  }

  onRemoveTag(tag: string) {
    this.filterService.removeTag(tag);
  }
}
