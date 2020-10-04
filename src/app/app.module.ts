import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailsCarComponent } from './details-car/details-car.component';



const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: CarsComponent,
    pathMatch: 'full'
  },
  {
    path: 'details-car/:id',
    component: DetailsCarComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CarsComponent,
    DetailsCarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
