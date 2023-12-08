import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-full-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-full-card.component.html',
  styleUrl: './cafe-full-card.component.css'
})
export class CafeFullCardComponent {
  @Input() cafe: any;
}