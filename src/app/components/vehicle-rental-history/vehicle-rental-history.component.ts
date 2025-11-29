import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { VehicleRentalHistoryDataSource, VehicleRentalHistoryItem } from './vehicle-rental-history-datasource';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-vehicle-rental-history',
  templateUrl: './vehicle-rental-history.component.html',
  styleUrl: './vehicle-rental-history.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatIcon,
    MatFormFieldModule,
    MatFormField,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class VehicleRentalHistoryComponent implements OnInit, AfterViewInit {
  form!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VehicleRentalHistoryItem>;

  dataSource = new VehicleRentalHistoryDataSource();

  displayedColumns = ['name', 'lastName', 'carPlate', 'rentalId', 'checkOut', 'checkIn', 'status', 'view'];
  ngOnInit(): void {
    this.form = this.fb.group({
      totalRevenue: [{ value: '€1,200', disabled: true }]
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getTotalRevenue() {
    console.log('Total Revenue Clicked!')

  }
}
