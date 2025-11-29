import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface VehicleMaintenanceHistoryItem {
  dateOfLeave: string;
  checkOut: string;
  checkIn: string;
  days: string;
  repairType: string;
  address: string;
  status: string;
}

const maintenanceHistory: VehicleMaintenanceHistoryItem[] = [
  {
    dateOfLeave: 'Ben',
    checkOut: 'Dough',
    checkIn: 'srgrwey',
    days: 'adgdsfhs',
    repairType: '21/09/2023',
    address: '25/09/2023',
    status: 'Completed',
  },
  {
    dateOfLeave: 'Ben',
    checkOut: 'Dough',
    checkIn: 'srgrwey',
    days: 'adgdsfhs',
    repairType: '21/09/2023',
    address: '25/09/2023',
    status: 'Active',
  },
  {
    dateOfLeave: 'Ben',
    checkOut: 'Dough',
    checkIn: 'srgrwey',
    days: 'adgdsfhs',
    repairType: '21/09/2023',
    address: '25/09/2023',
    status: 'Active',
  },
  {
    dateOfLeave: 'Ben',
    checkOut: 'Dough',
    checkIn: 'srgrwey',
    days: 'adgdsfhs',
    repairType: '21/09/2023',
    address: '25/09/2023',
    status: 'Active',
  },
];

export class VehicleMaintenanceHistoryDataSource extends MatTableDataSource<VehicleMaintenanceHistoryItem> {
  constructor() {
    super(maintenanceHistory);
  }

}
