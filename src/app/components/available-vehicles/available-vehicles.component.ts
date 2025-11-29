import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AvailVehiclesTableDataSource, AvailVehiclesTableItem } from './available-vehicles-datasource';


@Component({
  selector: 'app-available-vehicles',
  templateUrl: './available-vehicles.component.html',
  styleUrls: ['./available-vehicles.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTable,
    
  ]
})

export class AvailableVehiclesComponent implements OnInit {
  dataSource = new MatTableDataSource<AvailVehiclesTableItem>();
  displayedColumns: string[] = ['carId', 'plate', 'model', 'color', 'status'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const vehiclesData: AvailVehiclesTableItem[] = [
      { carId: 'KARTEX1234', plate: 'ABC-123', model: 'SUV', color: 'Black', status: 'Active' },
      { carId: 'KARTEX5678', plate: 'XYZ-456', model: 'Sedan', color: 'White', status: 'Active' },
      { carId: 'KARTEX9101', plate: 'DEF-789', model: 'Hatchback', color: 'Red', status: 'Active' },
      { carId: 'KARTEX1122', plate: 'GHI-101', model: 'Truck', color: 'Blue', status: 'Active' }
    ];
    this.dataSource.data = vehiclesData;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}