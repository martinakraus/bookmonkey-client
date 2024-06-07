import { Component, OnDestroy } from '@angular/core';
import { Book } from "./book";
import { BookApiService } from "./book-api.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnDestroy {
  books: Book[] | undefined;
  subscription: Subscription;

  constructor(private readonly bookApiService: BookApiService) {
    this.subscription = bookApiService.getAll().subscribe(books => this.books = books);
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
