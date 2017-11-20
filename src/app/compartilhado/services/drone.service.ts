import { Drone } from './../models/drone.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DroneService {

  baseURL: string;

  constructor(private http: Http) {
    this.baseURL = 'http://localhost:8000';
  }

  createDrone(drone: Drone) {
    return this.http.post(`${this.baseURL}/drone`, drone)
      .toPromise();
  }

  updateDrone(id: number, drone: Drone) {
    return this.http.post(`${this.baseURL}/drone/${id}/`, drone)
      .toPromise();
  }

  deleteDrone(id: number) {
    return this.http.delete(`${this.baseURL}/drone/${id}`)
      .toPromise();
  }

  getDrone(id: number): Promise<Drone> {
    return this.http.get(`${this.baseURL}/drone/${id}`)
      .toPromise()
      .then(response => response.json());
  }

  getAllDrones(): Promise<Array<Drone>> {
    return this.http.get(`${this.baseURL}/drones`)
      .toPromise()
      .then(response => response.json());
  }

  getDronesByUser(user_id): Promise<Array<Drone>> {
    return this.http.get(`${this.baseURL}/drones/user/${user_id}`)
      .toPromise()
      .then(response => response.json());
  }
}
