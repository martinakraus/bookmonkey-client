import { Injectable } from '@angular/core';
import { Book } from "./book";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  books: Book[] = [
    {
      title: "Design Patterns",
      abstract: "Elements of Reusable Object-Oriented Software",
      author: "Martina Kraus",
      isbn: "1"
    },
    {
      title: "REST und HTTP",
      abstract: "Entwicklung und Integration nach dem Architekturstil des Web",
      author: "Martina Kraus",
      isbn: "2"
    },
    {
      title: "Eloquent JavaScript",
      abstract: "A Modern Introduction to Programming",
      author: "Martina Kraus",
      isbn: "3"
    }
  ]

  getAll(): Observable<Book[]> {
    return of(this.books);
  }
}
