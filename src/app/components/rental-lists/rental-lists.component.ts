import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RentalListsItem } from './rental-lists-datasource';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rental-lists',
  templateUrl: './rental-lists.component.html',
  styleUrls: ['./rental-lists.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    //MatPaginator,
    MatSort
  ]
})
export class RentalListsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'rentalId',
    'customer',
    'car',
    'employee',
    'checkOutPrice',
    'checkOut',
    'checkIn',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<RentalListsItem>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource.data = [
      {
        rentalId: '1',
        customer: 'John Doe',
        car: 'Toyota',
        employee: 'Alice',
        checkOutPrice: 150,
        checkOut: new Date(),
        checkIn: new Date(),
        status: 'Active'
      },
      {
        rentalId: '2',
        customer: 'Jane Smith',
        car: 'Honda',
        employee: 'Bob',
        checkOutPrice: 200,
        checkOut: new Date(),
        checkIn: new Date(),
        status: 'Completed'
      }
    ];
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  gotoCheckOut() {
    this.router.navigate(['/check-out']);
  }
}
