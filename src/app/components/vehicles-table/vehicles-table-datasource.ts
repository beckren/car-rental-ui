import { MatTableDataSource } from '@angular/material/table';

export interface VehiclesTableItem {
  carId: string;
  plate: string;
  model: string;
  color: string;
  year: number;
}

const VEHICLE_DATA: VehiclesTableItem[] = [
  { carId: 'KARTEX1234', plate: 'ABC-123', model: 'SUV', color: 'Black', year: 2022 },
  { carId: 'KARTEX5678', plate: 'XYZ-456', model: 'Sedan', color: 'White', year: 2021 },
  { carId: 'KARTEX9101', plate: 'DEF-789', model: 'Hatchback', color: 'Red', year: 2023 },
  { carId: 'KARTEX1122', plate: 'GHI-101', model: 'Truck', color: 'Blue', year: 2020 },
];

export class VehiclesTableDataSource extends MatTableDataSource<VehiclesTableItem> {
  constructor() {
    super(VEHICLE_DATA);
  }
}
