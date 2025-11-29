import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Angular Material imports
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export interface Rental {
  rentalId: string;
  customer: string;
  carGroup: string;
  carModel: string;
  carLicense: string;
  phoneNumber: string;
  email: string;
  checkOutPrice: number;
  checkOut: Date;
  checkIn: Date;
  status: string;
}

@Component({
  selector: 'app-manifest-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  templateUrl: './manifest-menu.component.html',
  styleUrls: ['./manifest-menu.component.scss'],
})
export class ManifestMenuComponent implements OnInit, AfterViewInit {
  rentalTypes = ['Upcoming', 'Returning', 'On Rent', 'Closed'];
  selectedType: string = 'Upcoming';

  displayedColumns: string[] = [
    'rentalId',
    'customer',
    'carGroup',
    'carModel',
    'carLicense',
    'checkOutPrice',
    'phoneNumber',
    'email',
    'checkOut',
    'checkIn',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource<Rental>();
  allRentals: Rental[] = [];

  filterStartDate: Date | null = null;
  filterEndDate: Date | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    // Initialize with sample data
    this.allRentals = [
      {
        rentalId: '1',
        customer: 'John Doe',
        carGroup: 'A',
        carModel: 'Toyota Corolla',
        carLicense: 'ABC123',
        phoneNumber: '+355692223344',
        email: 'john@example.com',
        checkOutPrice: 150,
        checkOut: now,
        checkIn: tomorrow,
        status: 'Upcoming',
      },
      {
        rentalId: '2',
        customer: 'Jane Smith',
        carGroup: 'B',
        carModel: 'Honda Civic',
        carLicense: 'DEF456',
        phoneNumber: '+355693334455',
        email: 'jane@example.com',
        checkOutPrice: 200,
        checkOut: now,
        checkIn: tomorrow,
        status: 'Returning',
      },
      {
        rentalId: '3',
        customer: 'Emily Brown',
        carGroup: 'C',
        carModel: 'Ford Focus',
        carLicense: 'GHI789',
        phoneNumber: '+355694445566',
        email: 'emily@example.com',
        checkOutPrice: 180,
        checkOut: now,
        checkIn: tomorrow,
        status: 'On Rent',
      },
      {
        rentalId: '4',
        customer: 'Mark Johnson',
        carGroup: 'D',
        carModel: 'BMW 3 Series',
        carLicense: 'JKL012',
        phoneNumber: '+355695556677',
        email: 'mark@example.com',
        checkOutPrice: 300,
        checkOut: now,
        checkIn: tomorrow,
        status: 'Closed',
      },
    ];

    this.updateTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Include all columns in filtering
    this.dataSource.filterPredicate = (data: Rental, filter: string) => {
      const normalized = filter.trim().toLowerCase();
      return (
        data.customer.toLowerCase().includes(normalized) ||
        data.carModel.toLowerCase().includes(normalized) ||
        data.carLicense.toLowerCase().includes(normalized) ||
        data.phoneNumber.toLowerCase().includes(normalized) ||
        data.email.toLowerCase().includes(normalized)
      );
    };
  }

  selectRentalType(type: string): void {
    this.selectedType = type;
    this.updateTable();
  }

  getActionButtons(): string[] {
    switch (this.selectedType.toLowerCase()) {
      case 'upcoming':
        return ['New Reservation'];
      case 'on rent':
        return [ 'Close Rental'];
      case 'returning':
        return ['Close Rental'];
      case 'closed':
        return [];
      default:
        return [];
    }
  }

  handleAction(action: string): void {
    switch (action) {
      case 'New Reservation':
        this.router.navigate(['/new-upcoming-rental']);
        break;
      case 'New Rental':
        this.router.navigate(['/check-out']);
        break;
      case 'Close Rental':
        this.router.navigate(['/check-in']);
        break;
      default:
        console.warn('Unhandled action:', action);
    }
  }

  updateTable(): void {
    let filtered = this.allRentals.filter(
      (r) => r.status.toLowerCase() === this.selectedType.toLowerCase()
    );

    if (this.filterStartDate || this.filterEndDate) {
      filtered = filtered.filter((rental) => {
        const outDate = new Date(rental.checkOut);
        if (this.filterStartDate && outDate < this.filterStartDate) return false;
        if (this.filterEndDate && outDate > this.filterEndDate) return false;
        return true;
      });
    }

    this.dataSource.data = filtered;
  }
applyTextFilter(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  this.dataSource.filter = value.trim().toLowerCase();
}

applyDateFilter(): void {
  const start = this.filterStartDate ? new Date(this.filterStartDate) : null;
  const end = this.filterEndDate ? new Date(this.filterEndDate) : null;

  this.dataSource.data = this.allRentals
    .filter((r) => r.status.toLowerCase() === this.selectedType.toLowerCase())
    .filter((r) => {
      const out = new Date(r.checkOut);
      if (start && out < start) return false;
      if (end && out > end) return false;
      return true;
    });
}


  clearDateFilters(): void {
    this.filterStartDate = null;
    this.filterEndDate = null;
    this.updateTable();
  }

  editRental(): void {
    this.router.navigate(['/check-out']);
  }
printTable(): void {
  window.print();
}
  trackByType(index: number, type: string): string {
    return type;
  }
}
