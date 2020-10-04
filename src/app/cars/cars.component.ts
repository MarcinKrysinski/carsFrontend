import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  public car = {} as Car;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  public getAllCars(){
    this.apiService.getAllCars().subscribe(
      res => {
        this.cars = res;
      },
      error => {
        alert('An error has occurred');
      }
    );
  }

  public saveCar(): void {
    this.apiService.postCar(this.car).subscribe(
      () => {
        this.car = {} as Car;
      }
    );
    window.location.reload();
  }

  deleteCar(id: number): void {
    this.apiService.deleteCar(id).subscribe(
      () => {
        this.cars = this.cars.filter(car => car.id !== id);
      }
    );
  }

}
