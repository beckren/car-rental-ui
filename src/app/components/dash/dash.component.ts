import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

// ✅ define interface OUTSIDE component
interface Vehicle {
  carId: string;
  plate: string;
  model: string;
  color: string;
  status: string;
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
  ],
})
export class DashComponent {
  constructor(private router: Router) {}

  // Table setup
  dataSource = new MatTableDataSource<Vehicle>();
  displayedColumns = ['carId', 'plate', 'model', 'color', 'status'];

  ngOnInit() {
    const vehiclesData: Vehicle[] = [
      { carId: 'KARTEX1234', plate: 'ABC-123', model: 'SUV', color: 'Black', status: 'Active' },
      { carId: 'KARTEX5678', plate: 'XYZ-456', model: 'Sedan', color: 'White', status: 'Active' },
      { carId: 'KARTEX9101', plate: 'DEF-789', model: 'Hatchback', color: 'Red', status: 'Active' },
      { carId: 'KARTEX1122', plate: 'GHI-101', model: 'Truck', color: 'Blue', status: 'Active' },
    ];
    this.dataSource.data = vehiclesData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(title: string): void {
    if (title === 'Recent Rentals') this.router.navigate(['/rental-lists']);
    if (title === 'Total Cars Available') this.router.navigate(['/available-vehicles']);
    if (title === 'Total Revenue') this.router.navigate(['/revenue']);
  }

  onFilterChange(value: string) {
    console.log('Filter selected:', value);
  }

  goToSmDashboard() {
    this.router.navigate(['/sm-dashboard']);
  }

  toggleDashboard(isSm: boolean) {
    if (isSm) {
      this.router.navigate(['/sm-dashboard']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
