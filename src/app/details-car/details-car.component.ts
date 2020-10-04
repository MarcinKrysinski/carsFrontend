import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../shared/api.service';
import { Location } from '@angular/common';

class CarService {
}

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {
  car: Car;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCar(id)
      .subscribe(car => this.car = car);
  }

  back(): void {
    this.location.back();
  }

  update(updatedCar: Car): void {
    this.apiService.updateCar(updatedCar).subscribe(
      res => {
        this.car = updatedCar;
      }
    );
    this.location.back();
  }
}
