import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

interface Stat { label: string; value: number; route?: string; }
interface Row { category: string;[key: string]: any; }

@Component({
  selector: 'app-sm-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  templateUrl: './sm-dashboard.component.html',
  styleUrls: ['./sm-dashboard.component.scss']
})
export class SmDashboardComponent implements OnInit {
  constructor(private router: Router) { }

  stats: Stat[] = [
    { label: 'Owned', value: Math.floor(Math.random() * 20) },
    { label: 'Unavailable', value: Math.floor(Math.random() * 20) },
    { label: 'On Rent', value: Math.floor(Math.random() * 20), route: '/rental-lists' },
    { label: 'Closed Rentals', value: Math.floor(Math.random() * 20) },
    { label: 'Overdue', value: Math.floor(Math.random() * 20) },
    { label: 'Idle', value: Math.floor(Math.random() * 20) },
    { label: 'Out of Service', value: Math.floor(Math.random() * 20) }
  ];

  viewModes: ('week')[] = ['week'];
  viewMode: 'week' = 'week';

  selectedDate = new Date();

  categories = ['On Hand', 'Due In', 'Res D/I', 'Stn-Inv', 'Veh-Rsvd', 'Available'];
  tableData: Row[] = [];

  ngOnInit(): void {
    this.generateTableData();
  }

  onStatClick(stat: Stat): void {
    if (stat.route) {
      this.router.navigate([stat.route]);
    }
  }

  setViewMode(mode: 'week'): void {
    this.viewMode = mode;
    this.generateTableData();
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    this.generateTableData();
  }

  private generateTableData(): void {
    const days = this.displayedDays;
    this.tableData = this.categories.map(cat => {
      const row: Row = { category: cat };
      days.forEach(d => row[d] = Math.floor(Math.random() * 10));
      return row;
    });
  }

  get displayedDays(): string[] {
    const start = this.selectedDate;
    return Array.from({ length: 7 }).map((_, i) =>
      new Date(start.getTime() + i * 86400000)
        .toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    );
  }

  get displayedColumns(): string[] {
    return ['category', ...this.displayedDays];
  }
  onCellClick(category: string, day: string): void {
    if (!this.isClickable(category)) return;

    const dateObj = new Date(day);
    const formattedDate = dateObj.getFullYear() + '-' +
      String(dateObj.getMonth() + 1).padStart(2, '0') + '-' +
      String(dateObj.getDate()).padStart(2, '0');

    // turn "On Hand" → "on-hand"
    const type = category.toLowerCase().replace(' ', '-');

    this.router.navigate(['/car-status'], {
      queryParams: { type, date: formattedDate },
    });
  }

  isClickable(category: string): boolean {
    return ['On Hand', 'Due In'].includes(category);
  }



}
