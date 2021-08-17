import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  filterListSub = new Subscription();
  filterList = null;
  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterListSub = this.filterService.activeTags.subscribe(
      (filterList) => {
        this.filterList = filterList;
        console.log(this.filterList);
      }
    );
  }

  ngOnDestroy() {
    this.filterListSub.unsubscribe();
  }
}
