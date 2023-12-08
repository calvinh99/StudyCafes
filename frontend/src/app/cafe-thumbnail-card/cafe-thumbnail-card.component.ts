import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-thumbnail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-thumbnail-card.component.html',
  styleUrl: './cafe-thumbnail-card.component.css'
})
export class CafeThumbnailCardComponent {
  @Input() cafe: any;
}