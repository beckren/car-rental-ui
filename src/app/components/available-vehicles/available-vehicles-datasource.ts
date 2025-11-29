import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export interface AvailVehiclesTableItem {
  carId: string;
  plate: string;
  model: string;
  color: string;
  status: string;
}




export class AvailVehiclesTableDataSource extends DataSource<AvailVehiclesTableItem> {


  data: AvailVehiclesTableItem[] = [
    { carId: 'KARTEX1234', plate: 'ABC-123', model: 'SUV', color: 'Black', status: 'Active' },
    { carId: 'KARTEX5678', plate: 'XYZ-456', model: 'Sedan', color: 'White', status: 'Active' },
    { carId: 'KARTEX9101', plate: 'DEF-789', model: 'Hatchback', color: 'Red', status: 'Active' },
    { carId: 'KARTEX1122', plate: 'GHI-101', model: 'Truck', color: 'Blue', status: 'Active' },
  ]
  connect(): Observable<AvailVehiclesTableItem[]> {
    return of(this.data);
  }

  disconnect(): void { }
}
