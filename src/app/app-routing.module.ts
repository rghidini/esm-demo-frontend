import {Routes} from '@angular/router';

export const routes: Routes = [
    {path: 'unsorted', loadChildren: () => import('./unsorted-list/unsorted-list.module').then(m => m.UnsortedListModule)},
    {path: 'sorted', loadChildren: () => import('./sorted-list/sorted-list.module').then(m => m.SortedListModule) },
];
