import { Component, inject } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ContentService } from '../../services/content.service';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SectionTitleComponent, TeamCardComponent, FadeInOnScrollDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  private readonly contentService = inject(ContentService);
  readonly teamMembers = this.contentService.team;
}
