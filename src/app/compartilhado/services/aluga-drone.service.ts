import { AlugaDrone } from './../models/aluga-drone.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlugaDroneService {

  baseURL: string;

  constructor(private http: Http) {
    this.baseURL = 'http://localhost:8000';
  }

  createAlugaDrone(alugaDrone: AlugaDrone) {
    return this.http.post(`${this.baseURL}/aluga_drone`, alugaDrone)
      .toPromise();
  }

  deleteAlugaDrone(drone_id: number, user_id: number) {
    return this.http.delete(`${this.baseURL}/aluga_drone/${drone_id}/${user_id}`)
      .toPromise();
  }

  getAlugaDrone(drone_id: number, user_id: number): Promise<AlugaDrone> {
    return this.http.get(`${this.baseURL}/aluga_drone/${drone_id}/${user_id}`)
      .toPromise()
      .then(response => response.json());
  }

  getAllAlugaDrone(): Promise<Array<AlugaDrone>> {
    return this.http.get(`${this.baseURL}/aluga_drones`)
      .toPromise()
      .then(response => response.json());
  }
}
