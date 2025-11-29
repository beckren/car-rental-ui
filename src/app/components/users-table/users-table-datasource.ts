import { MatTableDataSource } from '@angular/material/table';

export interface UsersTableItem {
  fname: string;
  lname: string;
  email: string;
  role: string;
}

const USER_DATA: UsersTableItem[] = [
  { fname: 'lala', lname: 'lala', email: 'lala@gmail.com', role: 'Admin' },
  { fname: 'lala', lname: 'lala', email: 'lala@gmail.com', role: 'employee' },
  { fname: 'lala', lname: 'lala', email: 'lala@gmail.com', role: 'rsa' },
  { fname: 'lala', lname: 'lala', email: 'lala@gmail.com', role: 'rsa' },
];

export class UsersTableDataSource extends MatTableDataSource<UsersTableItem> {
  constructor() {
    super(USER_DATA);
  }
}
