import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeThumbnailCardComponent } from '../cafe-thumbnail-card/cafe-thumbnail-card.component';

@Component({
  selector: 'app-cafes-list-popup',
  standalone: true,
  imports: [CommonModule, CafeThumbnailCardComponent],
  templateUrl: './cafes-list-popup.component.html',
  styleUrl: './cafes-list-popup.component.css'
})
export class CafesListPopupComponent {
  @Input() cafes!: any[];
  @Output() closePopup = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:mouseup', ['$event.target'])
  onClick(target: any) {
    const isClickedOutside = !this.elementRef.nativeElement.contains(target);
    if (isClickedOutside) {
      console.log('Clicked outside');
      this.closePopup.emit();
    }
  }
}