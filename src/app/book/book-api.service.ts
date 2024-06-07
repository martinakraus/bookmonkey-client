import { inject, Injectable } from '@angular/core';
import { Book } from "./book";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  baseUrl = 'http://localhost:4730/books';
  httpClient = inject(HttpClient);

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl);
  }
}
