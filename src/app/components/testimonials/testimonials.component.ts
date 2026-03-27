import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface TestimonialItem {
  name: string;
  country: string;
  program: string;
  quote: string;
  result: string;
  createdAt: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, FadeInOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  private readonly storageKey = 'sb.testimonials';
  readonly testimonials: TestimonialItem[] = [];

  constructor() {
    this.loadTestimonials();
  }

  submitTestimonial(
    name: string,
    country: string,
    program: string,
    quote: string,
    result: string,
    form: HTMLFormElement
  ): void {
    const entry: TestimonialItem = {
      name: name.trim(),
      country: country.trim(),
      program: program.trim(),
      quote: quote.trim(),
      result: result.trim(),
      createdAt: Date.now()
    };

    if (!entry.name || !entry.country || !entry.program || !entry.quote || !entry.result) {
      return;
    }

    this.testimonials.unshift(entry);
    this.persistTestimonials();
    form.reset();
  }

  private loadTestimonials(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw) as TestimonialItem[];
      this.testimonials.push(...parsed);
    } catch {
      this.testimonials.length = 0;
    }
  }

  private persistTestimonials(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(this.storageKey, JSON.stringify(this.testimonials));
  }
}
