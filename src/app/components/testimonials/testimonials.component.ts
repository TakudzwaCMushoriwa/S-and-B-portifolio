import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface TestimonialItem {
  name: string;
  country: string;
  program: string;
  quote: string;
  result: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, FadeInOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  private readonly http = inject(HttpClient);

  readonly testimonials$ = this.http
    .get<TestimonialItem[]>('assets/data/testimonials.json')
    .pipe(
      map((items) => items ?? []),
      catchError(() => of([]))
    );

  submitTestimonialEmail(
    name: string,
    country: string,
    program: string,
    quote: string,
    result: string,
    form: HTMLFormElement
  ): void {
    const trimmedName = name.trim();
    const trimmedCountry = country.trim();
    const trimmedProgram = program.trim();
    const trimmedQuote = quote.trim();
    const trimmedResult = result.trim();

    if (!trimmedName || !trimmedCountry || !trimmedProgram || !trimmedQuote || !trimmedResult) {
      return;
    }

    const recipient = 'christienmushoriwa@gmail.com';
    const subject = encodeURIComponent(`New Testimonial Submission - ${trimmedName}`);
    const body = encodeURIComponent(
      [
        `Name: ${trimmedName}`,
        `Country: ${trimmedCountry}`,
        `Program: ${trimmedProgram}`,
        `Outcome: ${trimmedResult}`,
        '',
        'Testimonial:',
        trimmedQuote,
        '',
        'Please add this approved testimonial to src/assets/data/testimonials.json'
      ].join('\n')
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    form.reset();
  }
}
