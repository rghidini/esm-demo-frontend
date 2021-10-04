import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnsortedListComponent} from './unsorted-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './unsorted-list-routing.module';
import {AppComponentService} from '../app-component.service';


@NgModule({
  declarations: [
    UnsortedListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UnsortedListModule { }
