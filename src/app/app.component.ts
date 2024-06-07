import { Component } from '@angular/core';
import { Book } from "./book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
