import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-upcoming-rental',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
  ],
  templateUrl: './new-upcoming-rental.component.html',
  styleUrl: './new-upcoming-rental.component.scss',
})
export class NewUpcomingRentalComponent implements OnInit {
  rentalForm!: FormGroup;
  showAdditionalFees = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rentalForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      carGroup: new FormControl(''),
      checkOutDate: new FormControl(null),
      checkOutTime: new FormControl(''),
      checkInDate: new FormControl(null),
      checkInTime: new FormControl(''),
      price: new FormControl(''),
      additionalFees: this.fb.array([]),
    });
  }

  get additionalFees(): FormArray {
    return this.rentalForm.get('additionalFees') as FormArray;
  }

  toggleAdditionalFees(): void {
    this.showAdditionalFees = !this.showAdditionalFees;
    if (this.showAdditionalFees && this.additionalFees.length === 0) {
      this.addAdditionalFee();
    }
  }

  addAdditionalFee() {
    const feeGroup = this.fb.group({
      feeType: [''],
      price: [''],
      feeDuration: [''],  
      maxPrice: [''],     
    });

    this.additionalFees.push(feeGroup);
  }


  removeAdditionalFee(index: number): void {
    this.additionalFees.removeAt(index);
  }

  saveForm(): void {
    console.log('Form Submitted:', this.rentalForm.value);
  }


  print(): void {
    window.print();
  }
}
