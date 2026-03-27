import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  readonly eyebrow = input('S&B Scholarship Agency');
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
