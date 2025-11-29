import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-options',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  template: `
    <button *ngIf="isMobile" mat-icon-button [matMenuTriggerFor]="menu" class="upload-icon">
      <mat-icon>attach_file</mat-icon>
    </button>

    <button *ngIf="!isMobile" mat-icon-button [matMenuTriggerFor]="menu" class="upload-icon">
      <mat-icon>cloud_upload</mat-icon>
    </button>

    <mat-menu #menu="matMenu" class="dark-menu">
      <button mat-menu-item (click)="uploadFromDevice()">
        <mat-icon>folder_open</mat-icon>
        <span>Choose File</span>
      </button>
      <button mat-menu-item (click)="takePhoto()">
        <mat-icon>camera_alt</mat-icon>
        <span>Take Photo</span>
      </button>
    </mat-menu>

    <input type="file" hidden id="fileInput" (change)="onFileSelected($event)" accept="image/*" capture="environment" />
  `,
  styles: [`
    .upload-icon {
      color: white;
      margin-left: 8px;
    }

    mat-icon {
      color: #4a4a4a;
    }

    mat-menu {
      background-color: #333 !important;
      color: white;
    }
  `]
})
export class UploadOptionsComponent implements OnInit {
  isMobile = false;

  ngOnInit() {
    this.detectDevice();
    window.addEventListener('resize', this.detectDevice.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  detectDevice() {
    this.isMobile = window.innerWidth <= 768;
  }

  uploadFromDevice() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.click();
  }

  takePhoto() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.setAttribute('capture', 'environment');
    fileInput?.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      console.log('Selected file:', file);
    }
  }
}
