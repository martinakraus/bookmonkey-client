import { Component } from '@angular/core';
import { Book } from "./book";
import { BookApiService } from "./book-api.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: Book[];

  constructor(private readonly bookApiService: BookApiService) {
    this.books = bookApiService.getAll();
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
