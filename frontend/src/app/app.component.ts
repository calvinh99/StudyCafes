import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CafesQueryButtonComponent } from './cafes-query-button/cafes-query-button.component';
import { CafesListPopupComponent } from './cafes-list-popup/cafes-list-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CafesQueryButtonComponent, CafesListPopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cafes: any[] = [];
  showCafes = false;

  onShowCafesList(cafes: any[]) {
    this.cafes = cafes;
    this.showCafes = true;
  }

  onClosePopup() {
    this.showCafes = false;
  }
}
