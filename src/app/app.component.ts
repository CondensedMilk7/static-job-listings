import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = this.dataService.fethchData();
  filterSub = new Subscription();

  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterSub = this.filterService.activeTags.subscribe(() => {
      this.data = this.dataService.fethchData();
    });
  }

  ngOnDestroy() {}
}
