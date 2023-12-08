import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent {
  @Input() cafes!: any[];
  @Output() closePopup = new EventEmitter<void>();
  @Output() cafeSelected = new EventEmitter<any>();

  // reference to the element itself, we use this to emit an event when clicking outside of this component
  constructor(private elementRef: ElementRef) {}

  // close list when user clicks outside of it
  @HostListener('document:mouseup', ['$event.target'])
  onClick(target: any) {
    const isClickedOutside = !this.elementRef.nativeElement.contains(target); // TODO: find a better way to do this
    const isCafeCardClicked = target.closest('app-cafe-card'); // TODO: find a better way to do this
    const isOverlayClicked = target.closest('.overlay'); // TODO: find a better way to do this
    if (isClickedOutside && !isCafeCardClicked && !isOverlayClicked) {
      console.log('Close list.');
      this.closePopup.emit();
    }
  }
}
