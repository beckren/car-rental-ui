import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

export interface Vehicle {
  mva: string;
  carGroup: string;
  licensePlate: string;
  fuel: string;
  carModel: string;
  mileage: string;
  color: string;
  status: string;
  transmission: string;
  // Add other fields as needed
}

@Injectable({ providedIn: 'root' })
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehiclesByGroup(carGroup: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.apiUrl}/vehicle?carGroup=${encodeURIComponent(carGroup)}`);
  }
}
