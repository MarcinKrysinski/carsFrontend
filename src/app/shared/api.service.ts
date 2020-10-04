import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) {  }

  getAllCars(): Observable<Car[]>{
     return this.http.get<Car[]>(this.BASE_URL);
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Car>(url);
  }

  postCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.BASE_URL, car);
  }

  deleteCar(carId: number): Observable<any> {
    const id = carId;
    const url = `${this.BASE_URL}/${id}`;

    return this.http.delete(url);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.BASE_URL, car);
  }
}
