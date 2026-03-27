import { Component, HostListener, input, signal } from '@angular/core';
import { TeamMember } from '../../services/content.service';

@Component({
  selector: 'app-team-card',
  standalone: true,
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  readonly member = input.required<TeamMember>();
  readonly profileOpen = signal(false);

  openProfile(): void {
    if (this.member().bio?.length) {
      this.profileOpen.set(true);
    }
  }

  closeProfile(): void {
    this.profileOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeProfile();
  }
}
