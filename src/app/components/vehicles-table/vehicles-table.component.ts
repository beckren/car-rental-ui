import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  VehiclesTableDataSource,
  VehiclesTableItem,
} from './vehicles-table-datasource';
import { Router } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    //MatCard,
    MatCardModule,
    NgFor,
  ],
})
export class VehiclesTableComponent implements AfterViewInit {
  constructor(private router: Router) { }

  editVehicle(vehicle: VehiclesTableItem) {
    this.router.navigate(['/edit-vehicle', vehicle.carId]);
  }

  @ViewChild(MatTable) table!: MatTable<VehiclesTableItem>;

  dataSource = new VehiclesTableDataSource();

  displayedColumns = ['carId', 'plate', 'model', 'color', 'year', 'actions'];

  ngAfterViewInit(): void {

    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  gotoNewCar() {
    this.router.navigate(['/add-vehicle']);
  }
  gotoMaintenance() {
    this.router.navigate(['/new-maintenance-info']);
  }
}
