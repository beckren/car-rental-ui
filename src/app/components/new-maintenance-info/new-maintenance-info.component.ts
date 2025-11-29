import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-maintenance-info',
  templateUrl: './new-maintenance-info.component.html',
  styleUrls: ['./new-maintenance-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class NewMaintenanceInfoComponent {

  NewVehicleForm!: FormGroup;  
  days: number = 0;  

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.NewVehicleForm = this.fb.group({
      carId: [{ value: 'ABC123', disabled: true }],
      mva: ['XYZ987', Validators.required],
      licencePlate: ['ABC-1234', Validators.required],
      placeOfLeave: ['memmingen', Validators.required],
      checkoutDate: [null, Validators.required],
      checkinDate: [null, Validators.required],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      repairType: ['', Validators.required],
      model: ['Corolla', Validators.required],
      color: ['Blue', Validators.required],
      brand: ['Toyota', Validators.required],
      year: ['2020', Validators.required],
      fuel: ['Gasoline', Validators.required],
      tireInformation: ['Michelin R-17', Validators.required],
      fuelLevel: ['Full', Validators.required],
      equipment: ['Standard', Validators.required],
      millage: ['15000', Validators.required],
      tuvInspection: ['2024-05-10', Validators.required]
    });

    this.NewVehicleForm.get('checkoutDate')?.valueChanges.subscribe(() => this.calculateDays());
    this.NewVehicleForm.get('checkinDate')?.valueChanges.subscribe(() => this.calculateDays());
  }

  calculateDays() {
    const checkoutDate = this.NewVehicleForm.get('checkoutDate')?.value;
    const checkinDate = this.NewVehicleForm.get('checkinDate')?.value;

    if (checkoutDate && checkinDate) {
      const diffTime = new Date(checkinDate).getTime() - new Date(checkoutDate).getTime();
      this.days = Math.ceil(diffTime / (1000 * 3600 * 24)); // Calculate the number of days
    }
  }

  addVehicle() {
    if (this.NewVehicleForm.valid) {
      console.log(this.NewVehicleForm.value);
      this.router.navigate(['/vehicle-registration']);
    } else {
      console.log('Form is invalid');
    }
  }

  cancelBtn() {
    this.router.navigate(['/vehicles']);
  }
  
}
