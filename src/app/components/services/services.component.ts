import { Component, inject } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ContentService } from '../../services/content.service';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionTitleComponent, ServiceCardComponent, FadeInOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private readonly contentService = inject(ContentService);
  readonly services = this.contentService.services;
}
