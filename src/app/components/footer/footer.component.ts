import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly contentService = inject(ContentService);
  readonly navItems = this.contentService.navItems;
  readonly socials = this.contentService.contactInfo.socials;
  readonly year = new Date().getFullYear();
}
