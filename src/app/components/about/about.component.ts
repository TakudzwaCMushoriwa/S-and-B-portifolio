import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';

interface CollagePhoto {
  src: string;
  alt: string;
  area: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, FadeInOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Replace each src with your real photo URL when ready.
  readonly collagePhotos: CollagePhoto[] = [
    { src: 'assets/images/client1.jpg', alt: 'Student success moment 1', area: 'p1' },
    { src: 'assets/images/client2.jpg', alt: 'Student success moment 2', area: 'p2' },
    { src: 'assets/images/client3.jpg', alt: 'Student success moment 3', area: 'p3' },
    { src: 'assets/images/client4.jpg', alt: 'Student success moment 4', area: 'p4' },
    { src: 'assets/images/client5.jpg', alt: 'Student success moment 5', area: 'p5' }
  ];
}
