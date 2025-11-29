// fee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

export interface Fee {
  feeName: string;
  feeCategory: string;
  amountCalculatedOnIntervals: string;
  amountAtCheckout: string;
  maxAmount: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  constructor(private http: HttpClient) {}

  getAllAdditionalFees(checkoutDate: string, expectedCheckinDate: string): Observable<Fee[]> {
  return this.http.get<Fee[]>(`${environment.apiUrl}/fee/additional`, {
    params: { checkoutDate, expectedCheckinDate }
  }).pipe(
    map((fees: Fee[]) => this.summarizeFees(fees))
  );
}

summarizeFees(fees: Fee[]): Fee[] {
  const feeMap = new Map<string, Fee>();

  for (const fee of fees) {
    const key = fee.feeName;
    const interval = Number(fee.amountCalculatedOnIntervals) || 0;
    const atCheckout = Number(fee.amountAtCheckout) || 0;
    const max = Number(fee.maxAmount) || 0;

    if (!feeMap.has(key)) {
      feeMap.set(key, {
        ...fee,
        amountCalculatedOnIntervals: interval.toString(),
        amountAtCheckout: atCheckout.toString(),
        maxAmount: max.toString()
      });
    } else {
      const existing = feeMap.get(key)!;
      existing.amountCalculatedOnIntervals = (
        Number(existing.amountCalculatedOnIntervals) + interval
      ).toString();
      existing.amountAtCheckout = (
        Number(existing.amountAtCheckout) + atCheckout
      ).toString();
      existing.maxAmount = Math.max(Number(existing.maxAmount), max).toString();
    }
  }

  return Array.from(feeMap.values());
}

}
