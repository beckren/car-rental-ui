import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface VehicleRentalHistoryItem {
  name: string;
  lastName: string;
  carPlate: string;
  rentalId: string;
  checkOut: string;
  checkIn: string;
  status: string;
}

const rentalHistory: VehicleRentalHistoryItem[] = [
  {
    name: 'Ben',
    lastName: 'Dough',
    carPlate: 'srgrwey',
    rentalId: 'adgdsfhs',
    checkOut: '21/09/2023',
    checkIn: '25/09/2023',
    status: 'Completed',
  },
  {
    name: 'Ben',
    lastName: 'Dough',
    carPlate: 'srgrwey',
    rentalId: 'adgdsfhs',
    checkOut: '21/09/2023',
    checkIn: '25/09/2023',
    status: 'Active',
  },
  {
    name: 'Ben',
    lastName: 'Dough',
    carPlate: 'srgrwey',
    rentalId: 'adgdsfhs',
    checkOut: '21/09/2023',
    checkIn: '25/09/2023',
    status: 'Active',
  },
  {
    name: 'Ben',
    lastName: 'Dough',
    carPlate: 'srgrwey',
    rentalId: 'adgdsfhs',
    checkOut: '21/09/2023',
    checkIn: '25/09/2023',
    status: 'Active',
  },
];

export class VehicleRentalHistoryDataSource extends MatTableDataSource<VehicleRentalHistoryItem> {
  constructor() {
    super(rentalHistory);
  }


}
