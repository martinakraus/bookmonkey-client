import { Component, inject } from '@angular/core';
import { Book } from "./book";
import { BookApiService } from "./book-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books$ = inject(BookApiService).getAll();
  router = inject(Router);

  goToBookDetails(book: Book) {
    this.router.navigate(['books', book.isbn])
  }
}
