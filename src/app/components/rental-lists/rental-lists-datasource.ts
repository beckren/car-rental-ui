import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export interface RentalListsItem {
  rentalId: string;
  customer: string;
  car: string;
  employee: string;
  checkOutPrice: number;
  checkOut: Date;
  checkIn: Date;
  status: string;
}

export class RentalListsDataSource extends DataSource<RentalListsItem> {
  data: RentalListsItem[] = [
    { rentalId: '1', customer: 'John Doe', car: 'Toyota', employee: 'Alice', checkOutPrice: 150, checkOut: new Date(), checkIn: new Date(), status: 'Active' },
    { rentalId: '2', customer: 'Jane Smith', car: 'Honda', employee: 'Bob', checkOutPrice: 200, checkOut: new Date(), checkIn: new Date(), status: 'Completed' },
  ];

  connect(): Observable<RentalListsItem[]> {
    return of(this.data);
  }

  disconnect(): void { }
}
