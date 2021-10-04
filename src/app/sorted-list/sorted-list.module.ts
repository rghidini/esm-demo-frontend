import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortedListComponent} from './sorted-list.component';
import {RouterModule} from '@angular/router';
import {routes} from './sorted-list-routing.module';


@NgModule({
  declarations: [
      SortedListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SortedListModule { }
