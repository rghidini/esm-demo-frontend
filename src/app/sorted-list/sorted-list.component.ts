import {Component, OnInit} from '@angular/core';
import {AppComponentService} from '../app-component.service';

@Component({
  selector: 'app-sorted-list',
  templateUrl: './sorted-list.component.html',
  styleUrls: ['./sorted-list.component.css'],
})
export class SortedListComponent implements OnInit {
  sortedList: any = null;
  errorMessage = null;
  constructor(private service: AppComponentService) { }

  ngOnInit(): void {
    this.getList();
    this.getError();
  }

  getList() {
    this.service.currentList$.subscribe(list => this.sortedList = list);
  }
  getError() {
    this.service.currentError$.subscribe(err => this.errorMessage = err);
  }

}
