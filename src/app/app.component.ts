import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,

  ],

})
export class AppComponent {
  title = 'vibes-mobility-ui';
  constructor(private router: Router) { }

}
