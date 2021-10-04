import {Component, OnInit} from '@angular/core';
import {AppComponentService} from '../app-component.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-unsorted-list',
  templateUrl: './unsorted-list.component.html',
  styleUrls: ['./unsorted-list.component.css']
})
export class UnsortedListComponent implements OnInit {
  listToBeSorted = '';
  constructor(private service: AppComponentService) { }

  ngOnInit(): void {
  }

  sortList() {
    this.service.sortList('[' + this.listToBeSorted + ']')
        .subscribe(
            response => {
              this.service.changeList(response);
              this.service.changeError(null);
            },
            (e: HttpErrorResponse) => {
              const message = `Code: ${e.error.status} Message: ${e.error.error}`;
              this.service.changeError(message);
              this.service.changeList(null);
            }
        );
  }

}
