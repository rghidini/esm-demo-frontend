import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppComponentService} from './app-component.service';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
