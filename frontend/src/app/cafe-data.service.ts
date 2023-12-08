import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CafeDataService {
  private apiUrl = 'http://127.0.0.1:8000/api/fetch'; // Your API URL
  private localStorageKey = 'cafes';

  constructor(private http: HttpClient) { }

  fetchFromApi(): Observable<any[]> {
    const t0 = window.performance.now();
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        const t1 = window.performance.now();
        console.log(`API call took ${t1 - t0} ms.`);
      })
    );
  }

  fetchFromLocalStorage(): Observable<any[]> {
    const t0 = window.performance.now();
    const localData = localStorage.getItem(this.localStorageKey);
    if (localData) {
      const t1 = window.performance.now();
      console.log(`localStorage fetch took ${t1 - t0} ms.`);
      return of(JSON.parse(localData));
    } else {
      console.log('No local data found. Fetching from API...');
      return this.fetchFromApi();
    }
  }
}
