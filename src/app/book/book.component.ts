import { Component, inject, OnDestroy } from '@angular/core';
import { Book } from "./book";
import { BookApiService } from "./book-api.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books$ = inject(BookApiService).getAll();

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
