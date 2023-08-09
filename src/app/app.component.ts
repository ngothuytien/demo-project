import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/api').pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.error);
        return of(error);
      })
    ).subscribe();
  }
}
