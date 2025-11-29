import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-help-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss'
})
export class HelpPageComponent {
  faqs: FAQ[] = [
    { question: 'How do I use the vehicle management system?', answer: 'Navigate to the "Vehicles" page to view, add, or manage vehicles.' },
    { question: 'How can I view rented vehicles?', answer: 'Go to the "Rented Vehicles" section in the dashboard.' },
    { question: 'Who do I contact for technical support?', answer: 'You can contact support using the button below.' },
  ];

  constructor(private router: Router) { }

  openEmail(): void {
    window.location.href = 'mailto:sadete.muja@atmax-holding.de';
  }
}
