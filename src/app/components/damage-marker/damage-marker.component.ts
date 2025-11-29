import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadOptionsComponent } from '../upload-options.component';

interface DamageMark {
  x: number;
  y: number;
}

@Component({
  selector: 'app-damage-marker',
  templateUrl: './damage-marker.component.html',
  styleUrls: ['./damage-marker.component.scss'],
  encapsulation: ViewEncapsulation.None, // This is the issue - it makes styles global
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    
  ],
})
export class DamageMarkerComponent {
  damageMarks: DamageMark[] = [];
  longPressTimeout: any;

  constructor(
    public dialogRef: MatDialogRef<DamageMarkerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  addMarker(event: MouseEvent | TouchEvent) {
    const image = event.target as HTMLImageElement;

    if (!image || image.tagName !== 'IMG') return;

    const rect = image.getBoundingClientRect();
    let x: number = 0;
    let y: number = 0;

    if (event instanceof MouseEvent) {
      x = ((event.clientX - rect.left) / image.clientWidth) * 100;
      y = ((event.clientY - rect.top) / image.clientHeight) * 100;
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0] || event.changedTouches[0];
      x = ((touch.clientX - rect.left) / image.clientWidth) * 100;
      y = ((touch.clientY - rect.top) / image.clientHeight) * 100;
    }

    x = Math.min(Math.max(x, 0), 100);
    y = Math.min(Math.max(y, 0), 100);

    console.log(`Marker added at X: ${x}% Y: ${y}%`);

    this.damageMarks.push({ x, y });
  }
  uploadedFiles: File[] = [];

  onImageUpload(event: any) {
    const files: FileList = event.target.files;
    this.uploadedFiles = Array.from(files);
    console.log(this.uploadedFiles); // for now
  }


  removeMarker(index: number) {
    this.damageMarks.splice(index, 1);
  }

  onMarkerClick(index: number) {
    this.removeMarker(index);
  }

  onMarkerLongPress(index: number) {
    this.longPressTimeout = setTimeout(() => {
      this.removeMarker(index);
    }, 500);
  }

  onMarkerRelease() {
    clearTimeout(this.longPressTimeout);
  }

  save() {
    this.dialogRef.close(this.damageMarks);
  }

  close() {
    this.dialogRef.close();
  }
}
