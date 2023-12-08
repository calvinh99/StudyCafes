import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CafeDataService } from './cafe-data.service';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeCardComponent } from './cafe-card/cafe-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, CafeListComponent, CafeCardComponent],
  providers: [CafeDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cafes: any[] = [];
  showCafes = false;
  selectedCafe: any = null;

  constructor(private cafeDataService: CafeDataService) {}

  onCafeQueryButtonClick() {
    this.cafeDataService.fetchFromApi().subscribe(); // async
    this.cafeDataService.fetchFromLocalStorage().subscribe(data => {
      this.cafes = data;
      this.showCafes = true;
    });
  }

  onClosePopup() {
    this.showCafes = false;
  }

  onCloseCard() {
    this.selectedCafe = null;
  }

  onCafeSelected(cafe: any) {
    this.selectedCafe = cafe;
  }
}
