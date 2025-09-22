import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Client, client } from './client-logo';

@Component({
  selector: 'app-logo-carousel',
  imports: [CommonModule],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.css'
})
export class LogoCarouselComponent {
  clientData: Client[] = client.map(client => ({
    ...client,
    isHighlighted: ['PT Kereta Api Indonesia', 'UGM', 'PT Aneka Pertambangan TBK'].includes(client.name ?? '')
  }));
  constructor() {}
}
