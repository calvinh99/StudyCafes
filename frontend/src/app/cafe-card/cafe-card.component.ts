import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-card.component.html',
  styleUrl: './cafe-card.component.css'
})
export class CafeCardComponent {
  @Input() cafe: any;
  @Output() closeCard = new EventEmitter<void>();

  // reference to the element itself, we use this to emit an event when clicking outside of this component
  constructor(private elementRef: ElementRef) {}

  // close list when user clicks outside of it
  @HostListener('document:mouseup', ['$event.target'])
  onClick(target: any) {
    const isClickedOutside = !this.elementRef.nativeElement.contains(target);
    if (isClickedOutside) {
      console.log('Close card');
      this.closeCard.emit();
    }
  }
}
