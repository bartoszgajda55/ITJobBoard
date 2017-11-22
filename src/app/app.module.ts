import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import {AgmCoreModule} from '@agm/core';
import { PostajobComponent } from './components/postajob/postajob.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    MapComponent,
    HeaderComponent,
    FilterComponent,
    HomeComponent,
    PostajobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAbWiK10uUpKMwuEwaxLlwbMMQAJIgeoE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
