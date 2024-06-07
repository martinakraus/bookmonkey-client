import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from "./book-card/book-card.component";
import { HoverHighlightDirective } from "./hover-highlight.directive";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    HoverHighlightDirective,
    BookDetailComponent
  ],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})

export class BookModule {
}
