import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cafes-query-button',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cafes-query-button.component.html',
  styleUrl: './cafes-query-button.component.css'
})
export class CafesQueryButtonComponent {
  constructor(private http: HttpClient) {}

  onCafeQueryButtonClick() {
    this.http.get('http://127.0.0.1:8000/api/test').subscribe(response => {
      console.log('Response from backend:', response);
    });
  }
}
