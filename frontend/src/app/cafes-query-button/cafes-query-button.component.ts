import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CafeDataService } from '../cafe-data.service';

@Component({
  selector: 'app-cafes-query-button',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CafeDataService],
  templateUrl: './cafes-query-button.component.html',
  styleUrl: './cafes-query-button.component.css'
})
export class CafesQueryButtonComponent {
  @Output() showCafesList = new EventEmitter<any[]>();

  constructor(private cafeDataService: CafeDataService) {}

  onCafeQueryButtonClick() {
    this.cafeDataService.fetchFromApi().subscribe(); // async
    this.cafeDataService.fetchFromLocalStorage().subscribe(data => {
      this.showCafesList.emit(data);
    });
  }
}
