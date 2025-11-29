// src/app/services/fee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

interface FeeTypeDto {
  feeTypeId: number;
  name: string;
  categoryEnum: 'Additional' | 'CarGroup';
  interval: 'Daily' | 'Weekly' | 'Weekend';
  currentAmount: number;
  maxAmount: number;
}

interface ServiceResult<T> {
  isSuccess: boolean;
  data: T | null;
  errors: string | null;
}

@Injectable({ providedIn: 'root' })
export class FeeService {
  constructor(private http: HttpClient) { }

  getAllFees(): Observable<ServiceResult<FeeTypeDto[]>> {
    const headers = this.authHeaders();
    return this.http.get<ServiceResult<FeeTypeDto[]>>(`${environment.apiUrl}/fee`, { headers });
  }

  updateFees(body: any[]): Observable<ServiceResult<FeeTypeDto[]>> {
    const headers = this.authHeaders();
    return this.http.post<ServiceResult<FeeTypeDto[]>>(`${environment.apiUrl}/fee/update`, body, { headers });
  }

  private authHeaders() {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
}
