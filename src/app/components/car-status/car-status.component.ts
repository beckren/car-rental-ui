import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-status',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatSortModule, MatInputModule],
  templateUrl: './car-status.component.html',
  styleUrls: ['./car-status.component.scss']
})
export class CarStatusComponent implements OnInit {
  type: string | null = null;
  date: string | null = null;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.type = params.get('type');
      this.date = params.get('date');
      this.loadCars();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

loadCars() {
  const allCars = [
    { ran: 'R001', mva: 'MVA001', plate: 'AA123BB', model: 'Toyota Corolla', color: 'White', status: 'Available' },
    { ran: 'R002', mva: 'MVA002', plate: 'BB456CC', model: 'VW Golf', color: 'Black', status: 'Available' },
    { ran: 'R003', mva: 'MVA003', plate: 'CC789DD', model: 'Audi A3', color: 'Blue', status: 'Available' },
    { ran: 'R004', mva: 'MVA004', plate: 'DD111EE', model: 'Ford Focus', color: 'Gray', status: 'Available' }
  ];

  if (this.type === 'on-hand') {
    this.displayedColumns = ['mva', 'plate', 'model', 'color', 'status'];
    this.dataSource.data = allCars.filter(c => c.status !== 'Overdue');
  } else if (this.type === 'due-in') {
    this.displayedColumns = ['ran', 'mva', 'plate', 'model', 'color', 'status'];
    this.dataSource.data = allCars.filter(c =>
      c.status.includes('Due') || c.status === 'Overdue' || c.status === 'Returning Today'
    );
  }

  this.dataSource.sort = this.sort;
}

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
}
