import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-or-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './or-section.component.html',
  styleUrls: ['./or-section.component.css']
})
export class OrSectionComponent {
  constructor(private router: Router) {}

  navigateToRanking() {
    this.router.navigate(['/ranking']);
  }
}
