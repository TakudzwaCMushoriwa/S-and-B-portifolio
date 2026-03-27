import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, FadeInOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly contentService = inject(ContentService);
  readonly info = this.contentService.contactInfo;

  sendInquiry(name: string, email: string, message: string): void {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return;
    }

    const recipients = ['christienmushoriwa@gmail.com', 'murwisitinotenda183@gmail.com'].join(',');
    const subject = encodeURIComponent(`Scholarship Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${trimmedName}`,
        `Email Address: ${trimmedEmail}`,
        '',
        'Message:',
        trimmedMessage
      ].join('\n')
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  }
}
