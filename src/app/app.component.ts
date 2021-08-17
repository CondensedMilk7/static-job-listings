import {
  Component,
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
  
  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
