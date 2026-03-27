import { Component, input } from '@angular/core';
import { ServiceItem } from '../../services/content.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceItem>();
}
