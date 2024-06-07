import { Component, Input } from '@angular/core';
import { Book } from "../book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input({ required: true }) content: Book | undefined;
}
