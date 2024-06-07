import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from "../book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Output() detailClick = new EventEmitter<Book>();
  @Input({required: true}) content: Book | undefined;
  publishDate = new Date();

  handleDetailClick(click: MouseEvent) {
    click.preventDefault();
    this.detailClick.emit(this.content);
  }
}
